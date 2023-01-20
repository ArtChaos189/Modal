import { useState } from "react";

import { Modal } from "./components/Modal";

import "./index.scss";

export const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setOpen(false)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      <Modal open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="logo" />
      </Modal>
    </div>
  );
};
