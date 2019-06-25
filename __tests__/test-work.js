import React from 'react';
import { shallow } from 'enzyme';
import Work, { ExampleBubble } from '../js/work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let myWork = require('../data/mywork.json');


describe("Work component", () => {
    let component = shallow(<Work work={myWork} />);

    it("Should be a section element", () => {
        expect(component.type()).toEqual('span');
    });

    it("Should contain as many children as there are work examples", () => {
        expect(component.find('ExampleBubble').length).toEqual(myWork.length);
    });

    it('Should allow the modal to open and close', () => {
        component.instance().openModal();
        expect(component.instance().state.modalOpen).toBe(true);
        component.instance().closeModal();
        expect(component.instance().state.modalOpen).toBe(false);
    });
});

describe("ExampleBubble component", () => {
    let mockOpenModalFn = jest.fn();

    let component = shallow(<ExampleBubble work={myWork[1]} openModal={mockOpenModalFn} />);
    let images = component.find("img");

    it('Should containa single image element', () => {
        expect(images.length).toEqual(1);
    });

    it('Should have image source correctly', () => {
        expect(images.prop('src')).toEqual(myWork[1].image.src);
    });

    it('Should call open modal handler when clicked', () => {
        component.find(".section__wrapper").simulate('click');
        expect(mockOpenModalFn).toHaveBeenCalled();
    });

});