import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimulationCanvas from "./SimulationCanvas";
import "./Simulation.css";

const navLinks = ["Home", "About Us", "Services", "Article", "SIMUL"];

const FieldRow = ({
  label,
  placeholder,
  xPlaceholder,
  yPlaceholder,
  value,
  xValue,
  yValue,
  onChange,
}) => {
  const isDual = xPlaceholder && yPlaceholder;
  return (
    <div className="field-row">
      <span className="field-label">{label}</span>
      <div className={`field-input ${isDual ? "field-input--dual" : ""}`}>
        {isDual ? (
          <>
            <span className="axis">X:</span>
            <input
              className="input-control"
              type="number"
              value={xValue ?? ""}
              onChange={(e) => onChange("x", e.target.value)}
              placeholder={xPlaceholder}
            />
            <span className="axis">Y:</span>
            <input
              className="input-control"
              type="number"
              value={yValue ?? ""}
              onChange={(e) => onChange("y", e.target.value)}
              placeholder={yPlaceholder}
            />
          </>
        ) : (
          <input
            className="input-control"
            type="number"
            value={value ?? ""}
            onChange={(e) => onChange("single", e.target.value)}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

const ObjectCard = ({ title, body, onChange }) => {
  const updateField = (key) => (axis, val) => {
    const parsed = parseFloat(val);
    const safeVal = Number.isNaN(parsed) ? "" : parsed;
    if (axis === "single") {
      onChange(key, safeVal);
    } else {
      const current = body[key] || { x: 0, z: 0 };
      onChange(key, { ...current, [axis === "x" ? "x" : "z"]: safeVal });
    }
  };

  return (
    <section className="object-card">
      <h2 className="object-title">{title}</h2>
      <div className="object-fields">
        <FieldRow
          label="MASS"
          placeholder="질량을 입력"
          value={body.mass}
          onChange={updateField("mass")}
        />
        <FieldRow
          label="RADUIS"
          placeholder="반지름을 입력"
          value={body.radius}
          onChange={updateField("radius")}
        />
        <FieldRow
          label="POS"
          xPlaceholder="위치값"
          yPlaceholder="위치값"
          xValue={body.pos.x}
          yValue={body.pos.z}
          onChange={updateField("pos")}
        />
        <FieldRow
          label="VEL"
          xPlaceholder="방향값"
          yPlaceholder="방향값"
          xValue={body.vel.x}
          yValue={body.vel.z}
          onChange={updateField("vel")}
        />
      </div>
    </section>
  );
};

export const Simulation = () => {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [bodies, setBodies] = useState([
    {
      mass: 50,
      radius: 5,
      pos: { x: 0, z: 0 },
      vel: { x: 0, z: 0 },
    },
    {
      mass: 1,
      radius: 2,
      pos: { x: 6, z: 0 },
      vel: { x: -1, z: 2 },
    },
  ]);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleOpenSaveModal = () => setIsSaveModalOpen(true);
  const handleCloseSaveModal = () => {
    setIsSaving(false);
    setIsSaveModalOpen(false);
  };

  const handleBodyChange = (index, key, value) => {
    setBodies((prev) =>
      prev.map((body, i) => {
        if (i !== index) return body;
        if (key === "pos" || key === "vel") {
          return { ...body, [key]: { ...body[key], ...value } };
        }
        return { ...body, [key]: value };
      })
    );
  };

  const handleSaveConfirm = async () => {
    const name = saveName.trim() || "Untitled Simulation";
    const payload = {
      name,
      bodies: bodies.map((body) => ({
        mass: Number(body.mass) || 0,
        radius: Number(body.radius) || 0,
        pos: { x: Number(body.pos?.x) || 0, z: Number(body.pos?.z) || 0 },
        vel: { x: Number(body.vel?.x) || 0, z: Number(body.vel?.z) || 0 },
      })),
    };

    try {
      setIsSaving(true);
      // TODO: 백엔드 API 연결 시 실제 엔드포인트로 교체하세요.
      // await fetch("/api/simulations", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      console.log("Simulation save payload:", payload);
      handleCloseSaveModal();
    } catch (err) {
      console.error("Failed to save simulation", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleNavClick = (item) => {
    if (item === "Home") {
      navigate("/main");
    } else if (item === "SIMUL") {
      navigate("/simulation");
    }
  };

  return (
    <div className="simulation-page">
      <header className="top-nav">
        <div className="nav-left">
          <div className="brand">
            <img
              className="brand-logo"
              src="/vector-5.svg"
              alt="Gravity logo"
            />
          </div>
        </div>
        <nav className="nav-links">
          {navLinks.map((item, idx) => (
            <button
              type="button"
              key={item}
              className={`nav-link ${idx === 0 ? "nav-link--active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="lang-button" type="button">
            <img
              className="lang-icon"
              src="/icon-feather-icon.svg"
              alt="Change language"
            />
            <span>EN</span>
          </button>
          <button className="login-button" type="button">
            Login
          </button>
        </div>
      </header>

      <div className="simulation-body">
        <section className="canvas-area">
          <button
            className="save-button floating-save"
            type="button"
            onClick={handleOpenSaveModal}
          >
            시뮬레이션 저장
          </button>
          <SimulationCanvas isRunning={isRunning} bodies={bodies} />
        </section>

        <aside className="control-panel">
          <div className="panel-content">
            <ObjectCard
              title="OBJ-A"
              body={bodies[0]}
              onChange={(key, value) => handleBodyChange(0, key, value)}
            />
            <ObjectCard
              title="OBJ-B"
              body={bodies[1]}
              onChange={(key, value) => handleBodyChange(1, key, value)}
            />
            <div className="action-row">
              <button
                className="primary-button"
                type="button"
                onClick={handleStart}
              >
                START
              </button>
              <button
                className="ghost-button"
                type="button"
                onClick={handleStop}
              >
                Stop
              </button>
            </div>
          </div>
        </aside>
      </div>

      {isSaveModalOpen && (
        <div className="save-modal-overlay">
          <div className="save-modal">
            <h3 className="modal-title">시뮬레이션 저장</h3>
            <p className="modal-caption">저장 이름을 입력하세요.</p>
            <input
              className="modal-input"
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              placeholder="예: Orbit Test 1"
            />
            <div className="modal-actions">
              <button
                className="ghost-button"
                type="button"
                onClick={handleCloseSaveModal}
                disabled={isSaving}
              >
                취소
              </button>
              <button
                className="primary-button"
                type="button"
                onClick={handleSaveConfirm}
                disabled={isSaving}
              >
                {isSaving ? "저장 중..." : "저장하기"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
