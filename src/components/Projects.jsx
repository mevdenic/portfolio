import { LinkButton } from "./LinkButton";
import { Project } from "./Project";
import styles from "./Projects.module.css";
export function Projects() {
    return (
        <section id="projects">
            <Project name={"WorldWise"} image={"/img_project1.PNG"}>
                <p>
                    A web application that is used for storing places you visited, date of visit and
                    description of visit, on a local server. Places are selected by clicking on the
                    map included by React-LeafLet library.
                </p>
                <p>
                    Considering this project uses a local server, the demo is only demonstrative and
                    not fully functional. This can be fixed by creating a custom API (in progress).
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>Project specifics:</span> React router, API
                    fetching, context API
                </p>
                <div className={styles.iconContainer}>
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img src="/react_icon.png" alt="react icon" className={styles.images} />
                    </a>

                    <a
                        href="https://react.dev/reference/react/createContext"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img
                            src="/contextapi_icon.png"
                            alt="contextAPI icon"
                            className={styles.images}
                        />
                    </a>
                    <a
                        href="https://react-leaflet.js.org/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img src="/leaflet_icon.png" alt="leaflet icon" className={styles.images} />
                    </a>
                    <a
                        href="https://reactrouter.com/en/main"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img
                            src="/react_router_icon.png"
                            alt="react router icon"
                            className={styles.images}
                        />
                    </a>
                </div>
                <div className={styles.btnContainer}>
                    <LinkButton href={"https://velvety-concha-6d88c9.netlify.app/"}>
                        <div className={styles.btnWrapper}>
                            <span className={styles.dot}></span>{" "}
                            <span style={{ color: "white" }}>Demo</span>
                        </div>
                    </LinkButton>
                    <LinkButton
                        color={"var(--grey)"}
                        href={"https://github.com/mevdenic/react_worldwise"}
                    >
                        <div className={styles.btnWrapper}>
                            <img src="/GH_icon.png" alt="github icon" className={styles.btnImg} />
                            <span style={{ color: "white" }}>Code</span>
                        </div>
                    </LinkButton>
                </div>
            </Project>
            <Project name={"Youtube Clone"} image={"/img_project2.PNG"}>
                <p>
                    Shortly... A simple YouTube clone. Browse categories, search channels, search
                    and watch YouTube videos. All data is fetched from YouTube v3 API from RapidAPI.
                </p>
                <p>
                    The Project was not fully done using Material UI, but has some examples of it.
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>Project specifics:</span> React router, API
                    fetching, RapidAPI, MUI
                </p>
                <div className={styles.iconContainer}>
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img src="/react_icon.png" alt="react icon" className={styles.images} />
                    </a>

                    <a
                        href="https://mui.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img src="/mui_icon.svg" alt="contextAPI icon" className={styles.images} />
                    </a>
                    <a
                        href="https://reactrouter.com/en/main"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img
                            src="/react_router_icon.png"
                            alt="react router icon"
                            className={styles.images}
                        />
                    </a>
                    <a
                        href="https://rapidapi.com/hub"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconWrapper}
                    >
                        <img
                            src="/rapidAPI_icon.png"
                            alt="leaflet icon"
                            className={styles.images}
                        />
                    </a>
                </div>
                <div className={styles.btnContainer}>
                    <LinkButton href={"https://eclectic-pavlova-6d6afe.netlify.app/"}>
                        <div className={styles.btnWrapper}>
                            <span className={styles.dot}></span>{" "}
                            <span style={{ color: "white" }}>Demo</span>
                        </div>
                    </LinkButton>
                    <LinkButton
                        color={"var(--grey)"}
                        href={"https://github.com/mevdenic/react_youtube_clone"}
                    >
                        <div className={styles.btnWrapper}>
                            <img src="/GH_icon.png" alt="github icon" className={styles.btnImg} />
                            <span style={{ color: "white" }}>Code</span>
                        </div>
                    </LinkButton>
                </div>
            </Project>
        </section>
    );
}
