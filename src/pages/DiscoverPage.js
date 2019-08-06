import React from "react";
import { connect } from "react-redux";
import { Section, SectionModule, Details, Status } from "Components/layouts";
import { Label } from "Components";

const DiscoverPage = ({ selected, filter }) => {
    const { img_src, sol, camera, rover, status } = selected;
    return (
        <Section>
            <Label title={`nasa curiosity rover api ${filter}`} />
            <SectionModule img={img_src}>
                <Details>
                    {sol}
                    <br />
                    {camera.name}
                </Details>
                <Status>
                    Mars {rover.name} Rover <span>{rover.status}</span>
                </Status>
            </SectionModule>
        </Section>
    );
};

const mapStateToProps = state => ({
    selected: state.entities.selected,
});

export default connect(mapStateToProps)(DiscoverPage);
