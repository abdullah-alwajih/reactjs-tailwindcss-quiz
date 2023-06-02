import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";

import geoIcon from "../assets/images/geography.svg";
import histIcon from "../assets/images/history.svg";
import sciIcon from "../assets/images/science.svg";
import spaceIcon from "../assets/images/space.svg";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>:اختر فئة للبدء</Header>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <SubjectCard
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="جغرافية"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={histIcon}
                    imgAlt="An illustration of a shield"
                    subject="تاريخ"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={sciIcon}
                    imgAlt="An illustration of a beaker"
                    subject="علوم"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="فضاء"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Home;
