import React,{useState} from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { BiSearchAlt } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md';
import {RxTriangleDown, RxTriangleUp} from 'react-icons/rx';

const Wrap = styled.div`
    width: 1190px;
    margin:0 auto;
`
const SearchWrap = styled.div`
    height: 160px;
    display: flex;
    margin: 0 30px 0 30px ;
    
`
const Logo = styled.div`
    :hover {
        cursor:pointer ;
    }
    font-size: 55px;
    color: #03c75a;
    font-family: 'Black Han Sans', sans-serif;
    letter-spacing:2px;
    line-height:160px ;
    margin-right:20px ;
`
const Search = styled.div`
    width: 580px;
`
const SearchBar = styled.div`
    margin-top:51px ;
    border: 2px solid #03c75a;
    position: relative;
`
const Input = styled.input `
    background: none;
    border:none;
    font-size: 18px;
    padding: 13px 15px 13px 15px;
    width: 534px;
    :focus {outline: none;}
`
const AutocompleteBtn = styled.button`
    position:absolute ;
    right: 60px;
    color: #03c75a;
    top:9px;
    font-size:20px;
    :hover {
        cursor:pointer ;
    }
`
const Button = styled.button `
    background: #03c75a;
    font-size: 33px;
    color: white;
    text-align: center ;
    padding-top: 6px;
    width: 56px;
    height:47px;
    position:absolute ;
    right: 0;
`

const Service = styled.div`
    display:flex;
    color: #bdc3c7;
    font-size: 11px;
    margin-top:9px ;
    margin-left:40px ;
    height: 15px;
    line-height:15px ;
    span:first-child {
        cursor: pointer;
        display:flex;
        color: #3a3a3a;
        p:last-child {
            border-radius:50px ;
            background-color:white ;
            margin-left:5px;
            margin-right:5px;
            color: #7f8c8d;
            height:15px;
            width:15px;
            text-align: center ;
            line-height: 16px;
            box-shadow: -1px 1px 3px #bdc3c7;
        }
        :hover {
            text-decoration:underline ;
        }
    }
    span:nth-child(2) {
        color: #cdd4d8;
    }
    span:nth-child(3) {
        font-family: 'Jua', sans-serif;
        margin: 1px 10px 0 2px;
        :hover {
            color:red;
        }
    }
    span:last-child {
        font-family: 'Stylish', sans-serif;
        margin-top:1px;
        :hover {
            color: #03c75a;
        }
        
    }
`

const NavigationWrap = styled.div`

`
const Header = () => {
    const {register, watch, handleSubmit} = useForm();
    const [isClick, setIsClick] = useState(false);
    const onValid = (data:any) => {
        console.log(data)
    }


    return (
        <Wrap>
            <SearchWrap>
                <Logo>
                    NAVER
                </Logo>
                <Search>
                    <SearchBar>
                        <form onSubmit={handleSubmit(onValid)}>
                            <Input {...register("toDo", {required:true})} placeholder="검색어를 입력하세요" />
                            <AutocompleteBtn onClick={()=>{setIsClick(prev => !prev)}}> {isClick ? <RxTriangleUp/>:<RxTriangleDown/>}</AutocompleteBtn>
                            <Button><BiSearchAlt/></Button>
                            {isClick ? 
                            <div>

                            </div> :null}
                        </form>  
                    </SearchBar>
                </Search>
                <Service>
                    <span>
                        <span>네이버를 시작페이지로</span>
                        <p><MdKeyboardArrowRight/></p>
                    </span>
                    <span>ㅣ</span>
                    <span>
                        쥬니어네이버
                    </span>
                    <span>해피빈</span>
                </Service>
            </SearchWrap>
            <NavigationWrap>

            </NavigationWrap>
        </Wrap>
    )
}

export default Header;