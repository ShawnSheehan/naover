import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Section, SectionModule } from "Components/layouts";
import { Label, Tile } from "Components";
import { select, init } from "Actions";

const IntroPage = ({ filter, data, loading, history, selectObj, newSol }) => {
    const [sol, setSol] = useState(2460);
    const [rover, setRover] = useState("curiosity");

    function onSelect(obj) {
        selectObj(obj);
        history.push(`/discover/${obj.id}`);
    }

    function handlePage(curr) {
        if (curr !== "Prev") {
            setSol(sol + 1);
        } else {
            setSol(sol - 1);
        }

        newSol(rover, sol);
    }
    return (
        <Section>
            <Label title={`nasa curiosity rover api ${filter}`} />
            <SectionModule>
                {data.splice(0, 10).map(d => (
                    <Tile
                        key={d.id}
                        img={d.img_src}
                        id={d.id}
                        onClick={() => onSelect(d)}
                    />
                ))}
                <Tile loading={loading} onClick={() => handlePage("Prev")}>
                    <MdChevronLeft size="2em" />
                </Tile>
                <Tile loading={loading} onClick={() => handlePage("Next")}>
                    <MdChevronRight size="2em" />
                </Tile>
            </SectionModule>
        </Section>
    );
};

IntroPage.propTypes = {
    filter: PropTypes.string,
};

IntroPage.defaultProps = {
    filter: "Mars",
};

const mapStateToProps = state => ({
    data: state.entities.data,
    loading: state.entities.loading,
});

export default withRouter(
    connect(
        mapStateToProps,
        { selectObj: select, newSol: init },
    )(IntroPage),
);
