"use client";

import { useState } from "react";
import handyCheck from "@/assets/handy-check.svg";
import styles from "@/components/HandyTodoPage.module.css";

const todos = [
  { text: "build cms architecture for pseo setup", checked: true },
  {
    text: "design testimonial card appear animation on home page",
    checked: false,
  },
  {
    text: "add clamp values on headings, and subtitles",
    checked: false,
  },
  {
    text: "about hero animation // suggest to have a static or simpler version on smaller screens",
    checked: true,
  },
  { text: "fix nav-link hover states", checked: true },
  {
    text: "add text svgs - v imp (wrap word in span, and add svg)",
    checked: false,
  },
  { text: "nav-bar - ask for dropdown design", checked: false },
];

const helperCommand =
  "xattr -dr com.apple.quarantine /Applications/HandyToDo.app";

export const HandyTodoPage = () => {
  const [items, setItems] = useState(todos);
  const [copyLabel, setCopyLabel] = useState("copy");

  const toggleTodo = (index: number) => {
    setItems((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const copyCommand = async () => {
    const originalText = "copy";

    try {
      await navigator.clipboard.writeText(helperCommand);
      setCopyLabel("copied");
    } catch {
      setCopyLabel("failed");
    }

    window.setTimeout(() => {
      setCopyLabel(originalText);
    }, 1600);
  };

  const handleTodoKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTodo(index);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.gradientFade}></div>
      <div className={styles.gradientSolid}></div>

      <div className={styles.wrapper}>
        <div className={styles.todoCard}>
          {items.map((item, index) => (
            <div
              key={item.text}
              onClick={() => toggleTodo(index)}
              onKeyDown={(event) => handleTodoKeyDown(event, index)}
              role="button"
              tabIndex={0}
              className={`${styles.todoItem} ${item.checked ? styles.checked : ""}`}
            >
              <div className={styles.checkboxWrapper}>
                <div className={styles.checkbox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={handyCheck.src} alt="" />
                </div>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.text}>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div>
          <div className={styles.heading}>handy todo</div>
          <div className={styles.subtitle}>
            simple todo sheet that sits on
            <br />
            your mac toolbar
          </div>
        </div>

        <div className={styles.buttons}>
          <a
            href="https://github.com/bionicashish/handy-todo"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            view on github
          </a>

          <div className={styles.helperCommand}>
            <div className={styles.helperCommandLabel}>
              if macOS says &quot;app is damaged&quot; run this command
            </div>
            <div className={styles.helperCommandBox}>
              <div className={styles.helperCommandText}>{helperCommand}</div>
              <button
                className={styles.copyBtn}
                type="button"
                onClick={copyCommand}
              >
                {copyLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
