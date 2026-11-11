"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

const site = "https://imanco.net";
const menu = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/project" },
  {
    label: "Products",
    items: [
      { label: "Roof Tiles", path: "/product/roof-tiles" },
      { label: "Solar Water", path: "/product/solar-water" },
      { label: "Bricks", path: "/product/bricks" },
      { label: "Soft Stone", path: "/product/soft-stone" },
      { label: "Roofing Components", path: "/product/roofing-components" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Roof Tiles Simulator", path: "/expirence-now" },
      { label: "Solar Water Heater Calculator", path: "/solar-water-heater-calculator" },
      { label: "Bricks Simulator", path: "/bricks-simulator" },
      { label: "Roof Tiles Dry Fix Installation", path: "/roof-tiles-dry-fix" },
    ],
  },
  { label: "GCC", path: "/gcc" },
  { label: "About Us", path: "/about-us" },
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact-us" },
];

export default function MobileMenu() {
  const drawer = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 841px)");
    const closeOnDesktop = () => {
      if (desktop.matches) drawer.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const close = () => drawer.current?.close();

  return (
    <div className={styles.mobileMenu}>
      <button type="button" className={styles.menuToggle} aria-label="Open navigation menu" aria-haspopup="dialog" aria-controls="gcc-menu" onClick={() => drawer.current?.showModal()}>
        <span className={styles.menuIcon} aria-hidden="true" />
      </button>
      <dialog id="gcc-menu" className={styles.drawer} ref={drawer} aria-labelledby="gcc-menu-title" onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}>
        <div className={styles.drawerPanel}>
          <div className={styles.drawerHeader}>
            <h2 id="gcc-menu-title">IMANCO Menu</h2>
            <button type="button" className={styles.menuToggle} aria-label="Close navigation menu" onClick={close}>
              <span className={styles.closeIcon} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className={styles.drawerNav}>
            {menu.map(({ label, path, items }) => items ? (
              <details key={label}>
                <summary>{label}</summary>
                <ul>{items.map((item) => (
                  <li key={item.path}><a href={site + item.path}>{item.label}</a></li>
                ))}</ul>
              </details>
            ) : (
              <a key={label} href={path === "/gcc" ? path : site + path} aria-current={path === "/gcc" ? "page" : undefined} onClick={path === "/gcc" ? (event) => {
                event.preventDefault();
                close();
              } : undefined}>{label}</a>
            ))}
          </nav>
        </div>
      </dialog>
    </div>
  );
}
