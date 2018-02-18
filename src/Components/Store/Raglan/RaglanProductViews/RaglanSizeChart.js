import React from 'react';
import {
    Holder,
    P2,
    P4,
    Modul1,
    Table1,
} from 'react-stylux';

export default function RaglanSizeChart() {
    return (
        <Modul1
            buttonText="Size Chart"
            boxWidth="550px"
            boxHeight="300px">
            <Holder
            direction="column">
                <P4
                    height='inherit'>
                    3/4 Sleeve Shirt Size Chart
                </P4>
                <Table1
                    rows="4"
                    columns="6"
                >
                    {'XS'}
                    {'S'}
                    {'M'}
                    {'L'}
                    {'XL'}
                    {'2XL'}
                    {'24 7/9'}
                    {'25 7/9'}
                    {'26 7/9'}
                    {'27 7/9'}
                    {'28 7/9'}
                    {'29 7/9'}
                    {'27 7/9'}
                    {'28 7/9'}
                    {'29 7/9'}
                    {'30 7/9'}
                    {'31 7/9'}
                    {'32 7/9'}
                    {'16 1/4'}
                    {'17 3/4'}
                    {'19 3/4'}
                    {'21 3/4'}
                    {'23 3/4'}
                    {'25 3/4'}
                </Table1>
                <P2>
                    As the shirts are hand made, the size measurements can vary by 2 inches.
                </P2>
            </Holder>
        </Modul1>
    )
}