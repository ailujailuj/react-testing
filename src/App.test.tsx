import { render, screen, fireEvent } from '@testing-library/react'
import App from './App';

const sum = (x: number, y: number) => {
    return x + y
}

describe('App component', () => {
    it('should sum correctly', () => {
        //toBe is a Jest Matcher, see documentation for other matchers
        expect(sum(4, 4)).toBe(8); 
    })

    it('should render App with hello message', () => {
        render(<App />)
        //getByText will search for some element with this text. If any element is found, test will pass.
        //getByText is case sensitive, 'hello world' would fail
        screen.getByText('Hello world!')
    })

    it('should change message on button click', () => {
        render(<App />)
        screen.getByText("Let's learn more about testing in React")
        const button = screen.getByText(/change message/i)
        fireEvent.click(button)
        screen.getByText(/new message!/i);
        
        const oldMessage = screen.queryByText("Let's learn more about testing in React")
        expect(oldMessage).not.toBeInTheDocument();
    })
})


export default {};