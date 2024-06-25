import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from './Button';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe("TItle 컴포넌트 테스트", () => {
    it('렌더를 확인',()=>{
        // 1 렌더
            render(
                <BookStoreThemeProvider>

                <Button size="large" scheme='primary'>버튼</Button>
                </BookStoreThemeProvider>
            );
        // 2 확인

        expect(screen.getByText('버튼')).toBeInTheDocument();
    });
});