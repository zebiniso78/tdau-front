import React from 'react';
import { TextContainer, TextContainer1, TextContainer2 } from '../container/style';
import FotoImg from 'assets/rectors/rectorMajlis.png'

function TextContnet() {
    return (
        <TextContainer>
            <TextContainer1>
                <div className="right-text">
                    <p><b>Since January 28, 2019:</b> <span>Minister of Agriculture of the Republic of Uzbekistan</span></p>
                    <p><b>Year of birth:</b> <span>12/21/1979</span></p>
                    <p><b>Place of birth:</b> <span> Fergana region</span></p>
                    <p><b>Nationality:</b> <span>Uzbek</span></p>
                    <p><b>Party membership:</b> <span>No</span></p>
                    <p><b>Qualification:</b> <span>Higher education</span></p>
                    <p><b>Graduated:</b></p>
                    <p><span>In 2000 Tashkent State Economic University</span></p>
                    <p><span>In 2003 the University of Birmingham UK</span></p>
                    <p><span>Specialty by education: international economic relations, public administration (Master)</span></p>
                    <p><b>Academic degree:</b> <span>No</span></p>
                    <p><b>Academic title:</b> <span>No</span></p>
                    <p><b>What foreign languages does he speak:</b> <span>Russian, English and Turkish</span></p>
                    <p><b>Does he have State awards (what):</b> <span>No</span></p>
                    <p><b>Whether he is a people's deputy, a deputy of republican, regional, city, district councils and other electoral bodies (specify in full):</b> <span>No</span></p>
                </div>
                <img src={FotoImg} alt="rector foto" />
            </TextContainer1>
            <TextContainer2>
                <h4>WORK ACTIVITIES</h4>
                <p><b>1996-2000</b> – Student of Tashkent State University of Economics</p>
                <p><b>2000-2001</b> - Specialist of the 2nd category of the Department of Foreign Affairs of the Uzbek International Bank "Uzprivatbank"</p>
                <p><b>2003-2004</b> - Leading Dealer of the Department of Dealing Operations of the Department of Operations with Gold and Foreign Exchange Reserves of the Department of Foreign Exchange Regulation and External Relations of the Central Bank of the Republic of Uzbekistan</p>
                <p><b>2004-2006</b> - Head of the Department of Operations with Precious Metals of the Department of Operations in International Financial Markets of the Department of Monetary Operations of the Central Bank of the Republic of Uzbekistan</p>
                <p><b>2006-2008</b> - Deputy Director of the Department of Monetary Operations of the Central Bank of the Republic of Uzbekistan - Head of the Department for Operations in International Financial Markets, acting. Director of the Department</p>
                <p><b>2008-2009</b> - Deputy Director of the Department for Management of International Reserves of the Central Bank of the Republic of Uzbekistan - Head of the Department for Operations in International Financial Markets</p>
                <p><b>2009-2017</b> - Director of the Department for Management of International Reserves of the Central Bank of the Republic of Uzbekistan</p>
                <p><b>2017-2017</b> - First Deputy Chairman of the Board of the NBU</p>
                <p><b>2017-2017</b> - First Deputy Chairman of the Accounts Chamber of the Republic of Uzbekistan - Head of the Inspectorate for Control over the Completeness of State Budget Receipts</p>
                <p><b>2017 -2019</b> - Minister of Foreign Trade of the Republic of Uzbekistan</p>
                <p><b>2019</b> - present – Minister of Agriculture of the Republic of Uzbekistan</p>
            </TextContainer2>
        </TextContainer>
    );
}

export default TextContnet;