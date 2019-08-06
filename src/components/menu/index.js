import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { MdSync, MdAdd, MdChevronLeft } from "react-icons/md";
import { Heading, Subtitle, SectionModule } from "Components/layouts";
import { MenuWrapper, MenuAction } from "./styles";

const Menu = ({ location, history }) => {
    const [active, setActive] = useState(false);

    const { pathname } = location;

    return (
        <React.Fragment>
            {pathname.includes("discover") ? (
                <MenuAction onClick={() => history.push("/")}>
                    <MdChevronLeft size="2em" />
                </MenuAction>
            ) : (
                <MenuAction onClick={() => setActive(!active)} active={active}>
                    <MdAdd size="2em" />
                </MenuAction>
            )}
            {!pathname.includes("discover") && active && (
                <MenuWrapper active={active}>
                    <Heading>Rover Analytics</Heading>
                    <SectionModule style={{ flex: 2 }}>Menu</SectionModule>
                    <Subtitle>{Date(Date.now().toString())}</Subtitle>
                    <div className="reset-icon">
                        <MdSync size="2em" />
                    </div>
                </MenuWrapper>
            )}
        </React.Fragment>
    );
};

export default withRouter(Menu);
