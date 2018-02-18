import React from 'react';
import {
    Holder,
    P4,
    Modul1,
    Table1,
} from 'react-stylux';

export default function TShirtSizeChart() {
    return (
        <Modul1
            buttonText="Size Chart"
            boxWidth="550px"
            boxHeight="300px">
            <Holder
            direction="column">
                <P4
                    height='inherit'>
                    T-Shirt Size Chart
                </P4>
                <Table1
                    rows="3"
                    columns="7"
                >
                    {'XS'}
                    {'S'}
                    {'M'}
                    {'L'}
                    {'XL'}
                    {'2XL'}
                    {'3XL'}
                    {'27'}
                    {'28'}
                    {'29'}
                    {'30'}
                    {'31'}
                    {'32'}
                    {'33'}
                    {'16 1/2'}
                    {'18'}
                    {'20'}
                    {'22'}
                    {'24'}
                    {'26'}
                    {'28'}
                </Table1>
            </Holder>
        </Modul1>
    )
}