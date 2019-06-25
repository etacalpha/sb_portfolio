import React from 'react';
import { shallow } from 'enzyme';
import WorkModal from '../js/work-modal'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myWork = {
    'title': "Arch Dev",
    'code': "https://github.com/etacalpha/archDev",
    "image": {
        "description": "screenshot of project",
        "src": "images/archDev.png"
    },
    "long_dsc": {
        "tech": "Java 11, Spring Boot, Spring Hibernate/JPA, Lombok, h2 in memory database, Angular 7, CSS Grid, Bootstrap, Docker, Docker-Compose, NGINX, Node.js, Digital Ocean, Ubuntu/Arch Linux",
        "dsc": "This was my original portfolio written with the above tech and hosted on Digital Ocean"
    }
};

describe('WorkModal component', () => {
    let component = shallow(<WorkModal work={myWork} open={false} />);

    let openComponent = shallow(<WorkModal work={myWork} open={true} />);


    let anchors = component.find('a');
    it("Should containd a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.prop('href')).toEqual(myWork.code);
    });

    it('Should have modal class set correctly', () => {
        expect(component.find(".background--blue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--blue").hasClass("modal--open")).toBe(true);
    });

});
