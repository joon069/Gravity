// src/components/SimulationCanvas.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { updatePositions } from "../hooks/useGravitySimulation";
import CurvaturePlane from "./CurvaturePlane";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function SimulationCanvas({ isRunning = false, bodies = [] }) {
  const canvasRef = useRef(null);
  const runningRef = useRef(isRunning);
  const rafIdRef = useRef(null);

  useEffect(() => {
    runningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    const getCanvasSize = () => {
      const canvas = canvasRef.current;
      const parent = canvas?.parentElement;
      if (!parent) {
        return { width: window.innerWidth, height: window.innerHeight };
      }
      const { width, height } = parent.getBoundingClientRect();
      return { width, height };
    };

    const normalizedBodies =
      bodies && bodies.length
        ? bodies.map((body) => {
            const massValue = Number(body.mass);
            const mass =
              Number.isFinite(massValue) && massValue > 0 ? massValue : 1;
            const radiusInput = Number(body.radius);
            const radius =
              Number.isFinite(radiusInput) && radiusInput > 0
                ? radiusInput
                : Math.cbrt(Math.abs(mass)) * 5;
            const posX = Number(body.pos?.x);
            const posZ = Number(body.pos?.z);
            const velX = Number(body.vel?.x);
            const velZ = Number(body.vel?.z);
            return {
              mass,
              radius,
              pos: { x: Number.isFinite(posX) ? posX : 0, y: 0, z: Number.isFinite(posZ) ? posZ : 0 },
              vel: { x: Number.isFinite(velX) ? velX : 0, y: 0, z: Number.isFinite(velZ) ? velZ : 0 },
            };
          })
        : [
            {
              mass: 100,
              radius: Math.cbrt(100) * 5,
              pos: { x: -6, y: 0, z: 0 },
              vel: { x: 0, y: 0, z: 0 },
            },
            {
              mass: 1,
              radius: Math.cbrt(1) * 5,
              pos: { x: 6, y: 0, z: 0 },
              vel: { x: -1, y: 0, z: 2 },
            },
          ];

    const { width, height } = getCanvasSize();
    let simBodies = normalizedBodies.map((b) => ({
      mass: b.mass,
      radius: b.radius,
      pos: { ...b.pos },
      vel: { ...b.vel },
    }));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020202);

    const axes = new THREE.AxesHelper(1);
    scene.add(axes);

    const curvaturePlane = CurvaturePlane(simBodies);
    scene.add(curvaturePlane);

    const camera = new THREE.PerspectiveCamera(100, width / height, 1, 1000);
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(width, height);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.rotateSpeed = 0.7;

    const light = new THREE.PointLight(0xffffff, 100);
    light.position.set(0, 5, 0);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambient);

    const colors = [0x00aaff, 0xff5533];
    const spheres = simBodies.map((body, idx) => {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(body.radius / 10, 32, 32),
        new THREE.MeshStandardMaterial({ color: colors[idx % colors.length] })
      );
      sphere.position.set(body.pos.x, body.pos.y, body.pos.z);
      scene.add(sphere);
      return sphere;
    });

    const animate = () => {
      controls.update();
      if (runningRef.current) {
        const dt = 0.01;
        simBodies = updatePositions(simBodies, dt);
        curvaturePlane.updateCurvature(simBodies);
        spheres.forEach((sphere, idx) => {
          const body = simBodies[idx];
          sphere.position.set(body.pos.x, body.pos.y, body.pos.z);
        });
      }
      renderer.render(scene, camera);
      rafIdRef.current = requestAnimationFrame(animate);
    };

    renderer.render(scene, camera);
    rafIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      const { width: nextWidth, height: nextHeight } = getCanvasSize();
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight, false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [bodies]);

  return <canvas ref={canvasRef} />;
}
