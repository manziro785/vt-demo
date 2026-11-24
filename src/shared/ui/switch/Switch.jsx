import './switch.css';

export function Switch({ checked, onToggle, title, children }) {
  return (
    <button className="anim-switch" role="switch" aria-checked={checked} onClick={onToggle} title={title}>
      <span className="switch-track"><span className="switch-knob" /></span>{children}
    </button>
  );
}
