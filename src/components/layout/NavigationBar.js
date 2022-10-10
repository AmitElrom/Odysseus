import React from "react";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  const toTopHandler = () => {};

  const toAboutHandler = () => {};

  const toValuesHandler = () => {};

  const toContactHandler = () => {};

  return (
    <header className={classes.header}>
      <div className={classes["company-name"]} onClick={toTopHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1609 560">
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n      .cls-1 {\n        fill: #4169e1;\n      }\n      .cls-1,\n      .cls-2,\n      .cls-3 {\n        stroke: #2f4ba1;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 10px;\n      }\n      .cls-2 {\n        fill: none;\n      }\n      .cls-3,\n      .cls-4 {\n        fill: #2f4ba1;\n      }\n      .cls-4 {\n        font-size: 157px;\n        font-family: ElMessiri-Bold, El Messiri;\n        font-weight: 700;\n        letter-spacing: 0.07em;\n      }\n      .cls-5 {\n        letter-spacing: 0.04em;\n      }\n      .cls-6 {\n        letter-spacing: 0.07em;\n      }\n      .cls-7 {\n        letter-spacing: 0.08em;\n      }\n    ",
              }}
            />
          </defs>
          <g id="base_final_copy" data-name="base final copy">
            <path
              className="cls-1"
              d="M242.49,411.14c0,.71-.06,1.42-.06,2.14v37.88A356.43,356.43,0,0,1,99.78,404.92c-.23-.12-.45-.25-.66-.38L100,403l18.89-32.72H119c1.23.71,2.47,1.42,3.71,2.11,1,.56,2,1.12,3,1.66l.37.2c1.16.64,2.32,1.26,3.49,1.88l.66.35,2.91,1.51c1.2.62,2.4,1.22,3.6,1.82l2.66,1.31,1.17.56c1.14.56,2.29,1.1,3.45,1.64l0,0,3.26,1.49,2.39,1.07c.79.36,1.59.7,2.39,1.05l3,1.3,3.11,1.29q2.4,1,4.81,1.92c1.13.44,2.26.88,3.39,1.3s2.54.95,3.82,1.41l.07,0q4.89,1.77,9.84,3.38l1.79.58.69.22,3.1,1q2,.61,3.93,1.17c1.29.39,2.58.75,3.88,1.11l.14,0,.13,0q3.19.9,6.42,1.71l1.75.44,1.8.44,1.8.43c1,.23,1.93.46,2.9.67l1.7.39a2.47,2.47,0,0,1,.29.06l3.18.68c1.32.28,2.65.54,4,.8l.6.12,1.79.34c.59.11,1.18.23,1.78.33q2.05.38,4.11.72l.15,0c1.26.21,2.53.42,3.81.61.11,0,.23,0,.35.06L234,410l4.65.63,3.3.4Z"
            />
            <path
              className="cls-1"
              d="M460.88,404.56c-.23.11-.43.24-.66.36a356.31,356.31,0,0,1-142.65,46.23V413.28c0-.74,0-1.47-.07-2.19l.26,0c2.61-.31,5.22-.65,7.81-1l.66-.09.47-.07c1.09-.16,2.18-.32,3.26-.5,1.38-.21,2.75-.43,4.12-.67q4.11-.69,8.18-1.5c1.36-.26,2.72-.54,4.07-.83l1.95-.41,2.09-.47c1.35-.3,2.69-.61,4-.93h0c1.33-.32,2.66-.64,4-1,1-.24,2-.5,3-.76l3-.79c2-.54,3.94-1.09,5.89-1.66,1.49-.44,3-.88,4.46-1.34l3.45-1.09c1.27-.4,2.55-.82,3.81-1.25h0q2.55-.85,5.08-1.75l2.45-.88c.82-.29,1.63-.59,2.44-.9l1.58-.59c1.1-.41,2.19-.83,3.28-1.26s2.21-.87,3.31-1.32c.5-.2,1-.4,1.5-.61l2.42-1,2.36-1,2.38-1c.79-.34,1.57-.69,2.36-1.05l2.36-1.07,2.34-1.08c.78-.37,1.56-.73,2.33-1.11l2.33-1.12q1.15-.56,2.31-1.14l1.6-.8c.89-.45,1.78-.9,2.66-1.36l2.66-1.38c.49-.27,1-.53,1.49-.79,1.84-1,3.67-2,5.49-3,.58-.32,1.16-.64,1.73-1l.66-.37,1.83-1.05,19,33Z"
            />
            <path
              className="cls-2"
              d="M441,370l-.06,0-1.83,1.05-.66.37c-.57.34-1.15.66-1.73,1-1.82,1-3.65,2-5.49,3-.5.26-1,.52-1.49.79l-2.66,1.38c-.88.46-1.77.91-2.66,1.36l-1.6.8q-1.15.59-2.31,1.14L418.18,382c-.77.38-1.55.74-2.33,1.11l-2.34,1.08-2.36,1.07c-.79.36-1.57.71-2.36,1.05l-2.38,1-2.36,1-2.42,1c-.49.21-1,.41-1.5.61-1.1.45-2.21.89-3.31,1.32s-2.18.85-3.28,1.26l-1.58.59c-.81.31-1.62.61-2.44.9l-2.45.88q-2.54.9-5.08,1.75h0c-1.27.43-2.53.84-3.81,1.25L374.69,399c-1.48.46-3,.9-4.46,1.34-2,.57-3.92,1.12-5.89,1.66l-3,.79-3,.76c-1.33.34-2.66.66-4,1h0c-1.34.32-2.68.63-4,.93l-2.09.47-1.95.41-4.07.83q-4.06.81-8.18,1.5c-1.37.23-2.75.46-4.12.67l-3.26.5-.47.07-.66.09c-2.59.37-5.2.71-7.81,1l-.26,0a37.57,37.57,0,0,0-75,.05l-.58-.07-3.3-.4L234,410l-3.74-.56c-.12,0-.24,0-.35-.06-1.28-.19-2.55-.4-3.81-.61l-.15,0q-2.06-.34-4.11-.72c-.6-.1-1.19-.22-1.78-.33l-1.79-.34-.6-.12c-1.33-.26-2.66-.52-4-.8l-3.18-.68a2.47,2.47,0,0,0-.29-.06l-1.7-.39c-1-.21-1.94-.44-2.9-.67l-1.8-.43-1.8-.44-1.75-.44q-3.22-.83-6.42-1.71l-.13,0-.14,0c-1.3-.36-2.59-.73-3.88-1.11l-3.93-1.17-3.1-1-.69-.22-1.79-.58q-5-1.6-9.84-3.38l-.07,0c-1.28-.46-2.55-.93-3.82-1.41l-3.39-1.3q-2.42-.94-4.81-1.92l-3.11-1.29-3-1.3c-.8-.35-1.6-.69-2.39-1.05l-2.39-1.07L144,383.3l0,0c-1.16-.54-2.31-1.08-3.45-1.64l-1.17-.56-2.66-1.31c-1.2-.6-2.4-1.2-3.6-1.82l-2.91-1.51-.66-.35c-1.17-.62-2.33-1.24-3.49-1.88l-.37-.2c-1-.54-2-1.1-3-1.66-1.24-.69-2.48-1.4-3.71-2.11L179.21,266l82.06-142.12a37.59,37.59,0,0,0,37.57-.06l17.32,30H280v25.77h51l49.75,86.18L436,361.34l.8,1.38Z"
            />
            <path
              className="cls-2"
              d="M380.79,265.72A200.62,200.62,0,0,1,280,292.81h-.21A200.61,200.61,0,0,1,179.21,266l82.06-142.12a37.59,37.59,0,0,0,37.57-.06l17.32,30H280v25.77h51Z"
            />
          </g>
          <g id="pendalum_final_copy" data-name="pendalum final copy">
            <rect
              className="cls-2"
              x={280}
              y="153.77"
              width="87.53"
              height="25.77"
            />
            <rect
              className="cls-2"
              x="367.53"
              y="145.22"
              width="93.35"
              height="44.03"
            />
            <line className="cls-2" x1={280} y1="153.77" x2={280} y2="128.84" />
            <polyline
              className="cls-2"
              points="280 375.71 280 292.81 280 179.54"
            />
            <line className="cls-2" x1={280} y1="91.4" x2={280} y2="91.26" />
            <line
              className="cls-2"
              x1="460.88"
              y1="204.24"
              x2="460.88"
              y2="189.25"
            />
            <line
              className="cls-2"
              x1="460.88"
              y1="145.22"
              x2="460.88"
              y2="130.23"
            />
            <path
              className="cls-2"
              d="M317.5,411.09a37.57,37.57,0,0,0-75,.05c0,.71-.06,1.42-.06,2.14v75.14L280,463.94l37.57,24.48V413.28C317.57,412.54,317.55,411.81,317.5,411.09Zm-34.73,2.2a2.77,2.77,0,0,1-5.54,0v0a2.77,2.77,0,0,1,5.54,0Z"
            />
            <path
              className="cls-3"
              d="M282.77,413.27v0a2.77,2.77,0,0,1-5.54,0v0a2.77,2.77,0,0,1,5.54,0Z"
            />
            <path
              className="cls-2"
              d="M280,53.69a37.58,37.58,0,1,0,37.57,37.57A37.57,37.57,0,0,0,280,53.69Zm1.44,40A2.83,2.83,0,0,1,280,94a2.74,2.74,0,0,1-1.33-.34,2.77,2.77,0,1,1,2.77-.06Z"
            />
            <path
              className="cls-3"
              d="M282.77,91.26a2.78,2.78,0,0,1-1.33,2.38A2.83,2.83,0,0,1,280,94a2.74,2.74,0,0,1-1.33-.34,2.77,2.77,0,1,1,4.1-2.44Z"
            />
          </g>
          <g id="Text">
            <text className="cls-4" transform="translate(616.65 335.65)">
              O
              <tspan className="cls-5" x="125.91" y={0}>
                D
              </tspan>
              <tspan className="cls-6" x="247.59" y={0}>
                Y
              </tspan>
              <tspan className="cls-7" x="358.11" y={0}>
                SSEUS
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li const={toAboutHandler}>אודות</li>
          <li const={toValuesHandler}>ערכים</li>
          <li const={toContactHandler}>צור קשר</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;