import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '../../layouts';
import { StorePage, ProductPage } from '../../pages';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<StorePage />} />
                    <Route path='stores'>
                        <Route path=":id" element={<ProductPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;