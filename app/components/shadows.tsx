"use client";

import React, { useState } from "react";
import { cn } from "../lib/utils";
import {Smooch_Sans} from "next/font/google";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const Shadows = () => {
  return (
    <>
    <div className=" mx-auto max-w-7xl mt-30  border-b border-neutral-300 ">
       <h1 id="box-shadows" className={`text-2xl md:text-3xl  font-bold`}>Box-Shadows</h1>
       <span className=" text-xs md:text-sm text-neutral-500 font-mono tracking-tight">All 62 Box-Shadows</span>
    </div>
    <div className="mx-auto mt-12  grid grid-cols-1 max-w-7xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center  ">
      <Container
        shadow="shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] mb-16 " >
          <span className={`text-xl ${smoochSans.className}`}>Shadow 1</span>
        </Container>

        <Container
        shadow="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 2</span>
        </Container>

        <Container
        shadow="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 3</span>
        </Container>

          <Container
        shadow="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 4</span>
        </Container>

        <Container
        shadow="shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 5</span>
        </Container>

        <Container
        shadow="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 6</span>
        </Container>

        <Container
        shadow="shadow-[0px_1px_4px_rgba(0,0,0,0.16),0px_0px_0px_3px_rgb(51,51,51)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.16),0px_0px_0px_3px_rgb(51,51,51)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 7</span>
        </Container>

        <Container
        shadow="shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 8</span>
        </Container>


      <Container
        shadow="shadow-[0px_4px_12px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 9</span>
        </Container>

        <Container
        shadow="shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 10</span>
        </Container>

        <Container
        shadow="shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 11</span>
        </Container>


        <Container
        shadow="shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),0px_0px_0px_1px_rgba(0,0,0,0.06)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),0px_0px_0px_1px_rgba(0,0,0,0.06)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 12</span>
        </Container>
 
        <Container
        shadow="shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 13</span>
        </Container>

        <Container
        shadow="shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),0px_8px_16px_-8px_rgba(0,0,0,0.3)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 14</span>
        </Container>

        <Container
        shadow="shadow-[0px_20px_30px_-10px_rgb(38,57,77)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_20px_30px_-10px_rgb(38,57,77)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 15</span>
        </Container>

        <Container
        shadow="shadow-[0px_0px_0px_2px_rgba(6,24,44,0.4),0px_4px_6px_-1px_rgba(6,24,44,0.65),0px_1px_0px_inset_rgba(255,255,255,0.08)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_0px_2px_rgba(6,24,44,0.4),0px_4px_6px_-1px_rgba(6,24,44,0.65),0px_1px_0px_inset_rgba(255,255,255,0.08)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 16</span>
        </Container>

         <Container
        shadow="shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 17</span>
        </Container>

       <Container
        shadow="shadow-[0px_30px_60px_-12px_rgba(50,50,93,0.25),0px_18px_36px_-18px_rgba(0,0,0,0.3)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_30px_60px_-12px_rgba(50,50,93,0.25),0px_18px_36px_-18px_rgba(0,0,0,0.3)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 18</span>
        </Container>


         <Container
        shadow="shadow-[0px_30px_60px_-12px_inset_rgba(50,50,93,0.25),0px_18px_36px_-18px_inset_rgba(0,0,0,0.3)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_30px_60px_-12px_inset_rgba(50,50,93,0.25),0px_18px_36px_-18px_inset_rgba(0,0,0,0.3)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 19</span>
        </Container>


         <Container
        shadow="shadow-[0px_1px_3px_rgba(0,0,0,0.12),0px_1px_2px_rgba(0,0,0,0.24)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.12),0px_1px_2px_rgba(0,0,0,0.24)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 20</span>
        </Container>

        <Container
        shadow="shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 21</span>
        </Container>

         <Container
        shadow="shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 22</span>
        </Container>

         <Container
        shadow="shadow-[0px_14px_28px_rgba(0,0,0,0.25),0px_10px_10px_rgba(0,0,0,0.22)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_14px_28px_rgba(0,0,0,0.25),0px_10px_10px_rgba(0,0,0,0.22)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 23</span>
        </Container>

         <Container
        shadow="shadow-[0px_19px_38px_rgba(0,0,0,0.3),0px_15px_12px_rgba(0,0,0,0.22)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_19px_38px_rgba(0,0,0,0.3),0px_15px_12px_rgba(0,0,0,0.22)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 24</span>
        </Container>


         <Container
        shadow="shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 25</span>
        </Container>


         <Container
        shadow="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 26</span>
        </Container>
  
        <Container
        shadow="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 27</span>
        </Container>

         <Container
        shadow="shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 28</span>
        </Container>


         <Container
        shadow="shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 29</span>
        </Container>


        <Container
        shadow="shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 30</span>
        </Container>



         <Container
        shadow="shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 31</span>
        </Container>


        <Container
        shadow="shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 32</span>
        </Container>

        <Container
        shadow="shadow-[0px_2px_4px_0px_inset_rgba(0,0,0,0.06)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_2px_4px_0px_inset_rgba(0,0,0,0.06)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 33</span>
        </Container>


         <Container
        shadow="shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 34</span>
        </Container>


         <Container
        shadow="shadow-[0px_1px_2px_rgba(0,0,0,0.07),0px_2px_4px_rgba(0,0,0,0.07),0px_4px_8px_rgba(0,0,0,0.07),0px_8px_16px_rgba(0,0,0,0.07),0px_16px_32px_rgba(0,0,0,0.07),0px_32px_64px_rgba(0,0,0,0.07)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_2px_rgba(0,0,0,0.07),0px_2px_4px_rgba(0,0,0,0.07),0px_4px_8px_rgba(0,0,0,0.07),0px_8px_16px_rgba(0,0,0,0.07),0px_16px_32px_rgba(0,0,0,0.07),0px_32px_64px_rgba(0,0,0,0.07)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 35</span>
        </Container>


        <Container
        shadow="shadow-[0px_2px_1px_rgba(0,0,0,0.09),0px_4px_2px_rgba(0,0,0,0.09),0px_8px_4px_rgba(0,0,0,0.09),0px_16px_8px_rgba(0,0,0,0.09),0px_32px_16px_rgba(0,0,0,0.09)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_2px_1px_rgba(0,0,0,0.09),0px_4px_2px_rgba(0,0,0,0.09),0px_8px_4px_rgba(0,0,0,0.09),0px_16px_8px_rgba(0,0,0,0.09),0px_32px_16px_rgba(0,0,0,0.09)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 36</span>
        </Container>


        <Container
        shadow="shadow-[0px_18px_50px_-10px_rgba(0,0,0,0.2)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_18px_50px_-10px_rgba(0,0,0,0.2)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 36</span>
        </Container>


        <Container
        shadow="shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_10px_50px_rgba(0,0,0,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 37</span>
        </Container>


         <Container
        shadow="shadow-[0px_3px_5px_rgba(0,0,0,0.04)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_3px_5px_rgba(0,0,0,0.04)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 38</span>
        </Container>


        <Container
        shadow="shadow-[-5px_5px_rgba(240,46,170,0.4),-10px_10px_rgba(240,46,170,0.3),-15px_15px_rgba(240,46,170,0.2),-20px_20px_rgba(240,46,170,0.1),-25px_25px_rgba(240,46,170,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[-5px_5px_rgba(240,46,170,0.4),-10px_10px_rgba(240,46,170,0.3),-15px_15px_rgba(240,46,170,0.2),-20px_20px_rgba(240,46,170,0.1),-25px_25px_rgba(240,46,170,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 39</span>
        </Container>

         <Container
        shadow="shadow-[0px_5px_rgba(240,46,170,0.4),0px_10px_rgba(240,46,170,0.3),0px_15px_rgba(240,46,170,0.2),0px_20px_rgba(240,46,170,0.1),0px_25px_rgba(240,46,170,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_5px_rgba(240,46,170,0.4),0px_10px_rgba(240,46,170,0.3),0px_15px_rgba(240,46,170,0.2),0px_20px_rgba(240,46,170,0.1),0px_25px_rgba(240,46,170,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 40</span>
        </Container>

         <Container
        shadow="shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2),20px_20px_rgba(240,46,170,0.1),25px_25px_rgba(240,46,170,0.05)]]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2),20px_20px_rgba(240,46,170,0.1),25px_25px_rgba(240,46,170,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 41</span>
        </Container>

         <Container
        shadow="shadow-[0px_1px_1px_rgba(0,0,0,0.07),0px_2px_2px_rgba(0,0,0,0.07),0px_4px_4px_rgba(0,0,0,0.07),0px_8px_8px_rgba(0,0,0,0.07),0px_16px_16px_rgba(0,0,0,0.07)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_1px_rgba(0,0,0,0.07),0px_2px_2px_rgba(0,0,0,0.07),0px_4px_4px_rgba(0,0,0,0.07),0px_8px_8px_rgba(0,0,0,0.07),0px_16px_16px_rgba(0,0,0,0.07)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 42</span>
        </Container>


        <Container
        shadow="shadow-[0px_0px_0.25em_rgba(67,71,85,0.27),0px_0.25em_1em_rgba(90,125,188,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_0.25em_rgba(67,71,85,0.27),0px_0.25em_1em_rgba(90,125,188,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 43</span>
        </Container>

        <Container
        shadow="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 44</span>
        </Container>

        <Container
        shadow="shadow-[0px_1px_0px_rgba(27,31,35,0.04),0px_1px_0px_inset_rgba(255,255,255,0.25)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_0px_rgba(27,31,35,0.04),0px_1px_0px_inset_rgba(255,255,255,0.25)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 45</span>
        </Container>


        <Container
        shadow="shadow-[0px_0px_0px_3px_rgba(3,102,214,0.3)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_0px_3px_rgba(3,102,214,0.3)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 46</span>
        </Container>


        <Container
        shadow="shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),0px_2px_16px_0px_rgba(14,30,37,0.32)]shadow-[0px_0px_0px_3px_rgba(3,102,214,0.3)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),0px_2px_16px_0px_rgba(14,30,37,0.32)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 47</span>
        </Container>


        <Container
        shadow="shadow-[0px_12px_28px_0px_rgba(0,0,0,0.2),0px_2px_4px_0px_rgba(0,0,0,0.1),0px_0px_0px_1px_inset_rgba(255,255,255,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_12px_28px_0px_rgba(0,0,0,0.2),0px_2px_4px_0px_rgba(0,0,0,0.1),0px_0px_0px_1px_inset_rgba(255,255,255,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 49</span>
        </Container>


          <Container
        shadow="shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 50</span>
        </Container>


         <Container
        shadow="shadow-[0px_10px_10px_-10px_rgba(33,35,38,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_10px_10px_-10px_rgba(33,35,38,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 51</span>
        </Container>


        <Container
        shadow="shadow-[0px_0px_0px_2px_blue_inset,10px_-10px_0px_-3px_rgb(255,255,255),10px_-10px_rgb(31,193,27),20px_-20px_0px_-3px_rgb(255,255,255),20px_-20px_rgb(255,217,19),30px_-30px_0px_-3px_rgb(255,255,255),30px_-30px_rgb(255,156,85),40px_-40px_0px_-3px_rgb(255,255,255),40px_-40px_rgb(255,85,85)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_0px_2px_blue_inset,10px_-10px_0px_-3px_rgb(255,255,255),10px_-10px_rgb(31,193,27),20px_-20px_0px_-3px_rgb(255,255,255),20px_-20px_rgb(255,217,19),30px_-30px_0px_-3px_rgb(255,255,255),30px_-30px_rgb(255,156,85),40px_-40px_0px_-3px_rgb(255,255,255),40px_-40px_rgb(255,85,85)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 52</span>
        </Container>



        <Container
        shadow="shadow-[0px_0px_0px_3px_rgb(85,91,255),0px_0px_0px_6px_rgb(31,193,27),0px_0px_0px_9px_rgb(255,217,19),0px_0px_0px_12px_rgb(255,156,85),0px_0px_0px_15px_rgb(255,85,85)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_0px_3px_rgb(85,91,255),0px_0px_0px_6px_rgb(31,193,27),0px_0px_0px_9px_rgb(255,217,19),0px_0px_0px_12px_rgb(255,156,85),0px_0px_0px_15px_rgb(255,85,85)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 53</span>
        </Container>


       <Container
        shadow="shadow-[3px_3px_6px_0px_inset_rgb(204,219,232),-3px_-3px_6px_1px_inset_rgba(255,255,255,0.5)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[3px_3px_6px_0px_inset_rgb(204,219,232),-3px_-3px_6px_1px_inset_rgba(255,255,255,0.5)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 54</span>
        </Container>


        <Container
        shadow="shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),-6px_-2px_16px_0px_rgba(255,255,255,0.8)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48),-6px_-2px_16px_0px_rgba(255,255,255,0.8)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 55</span>
        </Container>
        
        <Container
        shadow="shadow-[0px_1px_0px_rgba(17,17,26,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_0px_rgba(17,17,26,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 56</span>
        </Container>


         <Container
        shadow="shadow-[0px_1px_0px_rgba(17,17,26,0.05),0px_0px_8px_rgba(17,17,26,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_0px_rgba(17,17,26,0.05),0px_0px_8px_rgba(17,17,26,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 57</span>
        </Container>


         <Container
        shadow="shadow-[0px_0px_16px_rgba(17,17,26,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_0px_16px_rgba(17,17,26,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 58</span>
        </Container>


         <Container
        shadow="shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 59</span>
        </Container>
        

         <Container
        shadow="shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_32px_rgba(17,17,26,0.05)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_32px_rgba(17,17,26,0.05)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 60</span>
        </Container>



         <Container
        shadow="shadow-[0px_1px_0px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_48px_rgba(17,17,26,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_1px_0px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_48px_rgba(17,17,26,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 61</span>
        </Container>
         

          <Container
        shadow="shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]"
        className=" bg-white  h-60 w-60 rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)] mb-16 " >
            <span className={`text-xl ${smoochSans.className}`}>Shadow 62</span>
        </Container>
    </div>
    </>
  );
};

export const Container = ({
  className,
  children,
  shadow,
}: {
  className?: string;
  children?: React.ReactNode;
  shadow?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!shadow) return;

    await navigator.clipboard.writeText(shadow);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="group relative">
      <div
        className={cn(
          "flex items-center justify-center text-black dark:text-white",
          className
        )}
      >
        {children}
      </div>

     <button
  onClick={handleCopy}
  className=" absolute left-1/3 top-1/3 opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-lg border border-neutral-200 bg-white/80 px-3 py-1 text-sm backdrop-blur-md dark:border-neutral-700
  dark:bg-neutral-900/80 "
>
  {copied ? "Copied!" : "Copy"}
</button>
    </div>
  );
};