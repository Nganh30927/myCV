import {FaMobileAlt, FaMailBulk, FaGithubSquare} from 'react-icons/fa'
export const profiles =[{
    id: 1, imgUser: '', uname: 'Phạm Văn Ngọc Anh',
    profession: 'Web developer', 

    contact:[
    {id: 1, icons: FaMobileAlt, desc:'+84 32323232',},
    {id: 2, icons: FaMailBulk, desc:'ngocanh30927@gmail.com'},
    {id: 3, icons: FaGithubSquare, desc: 'https://github.com/Nganh30927'}
    ],

    experience:[
     {id: 1, exname: 'HTML', level: 4},
     {id: 2, exname: 'CSS', level: 4},   
     {id: 3, exname: 'Javascript', level: 3},   
     {id: 4, exname: 'Java 8', level: 3},   
     {id: 5, exname: 'SQL', level: 3}   
    ],

    aboutme: [
     {id: 1, title: 'Vận dụng kiến thức và kinh nghiệm đã học để làm việc và cống hiến cho doanh nghiệp. Mong muốn học hỏi ở môi trường chuyên nghiêp ổn định để gắn bó lâu dài và nâng cao khả năng của mình.'}   
    ],

    education: [
      {id: 1, day: '2020 - 2023', name: 'CAO ĐẲNG FPT POLYTECHNIC', title: 'Cử nhân thực thành chuyên ngành Ứng dụng phần mềm'}, 
      {id: 2, day: '2023 - Hiện tại', name: 'SOFTECH APTECH Đà Nẵng', title: 'Khoá học Fullstack Reactjs'} 
    ],

    workexperience: [
        {id: 1, day: '09/2022 - 11/2022', name: 'CÔNG TY (DOANH NGHIỆP) TNHH CÔNG NGHỆ NHÀ THÔNG MINH AZ', desc: 'Thực tập sinh Java'},
    ],

    
    project: [
        {id: 1, day: '09/2022 - 11/2022', name: 'Website bán hàng thiết bị điện tử thông minh', desc: 'Dự án tốt nghiệp với số lượng thành viên tham gia: 06', link: 'https://github.com/sonphan301002/SmartHome'},
    ]


}]