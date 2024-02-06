import  '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';
describe('first condition fir counter',()=>{
    test("shouldrender 0",()=>{
        render(<Counter/>)
        expect(screen.getByText(0)).toBeInTheDocument;

    });
})