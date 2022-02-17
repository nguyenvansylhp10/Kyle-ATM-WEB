import { Queue } from '../home/feature/Queue/Queue';
import {  useSelector } from 'react-redux'
import { useState ,useEffect} from 'react';
// import { useEffect, useState } from "react";
import { ATM, ATMResponseData } from "../interface";

import { getATMS } from "../api/atms";

const InitState = {
    atm:[],
    queue:[],
    process:[]
}
export const counterReducer = (state = InitState , action :any )=>{
    switch(action.type){
        case 'LIST_ATM':
            return{
                ...state,
                atm:action.payload
            }
            case 'LIST_Queue':
                return{
                    ...state,
                    queue:action.payload

                }
                case 'LIST_Process':
            return{
                ...state,
                process:action.payload

            }      
        default:
            return state;
    }
}


