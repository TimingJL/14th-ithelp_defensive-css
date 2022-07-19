import React from 'react';
import styled from 'styled-components';
import salad from './salad.png';
import pasta from './pasta.png';
import takoyaki from './takoyaki.png';
import frenchFries from './french-fries.png';
import shavedIce from './shaved-ice.png';

const Container = styled.div`
  padding: 200px;
`;

const Flexbox = styled.div`
  box-shadow: 0px 2px 0px -1px rgb(0 0 0 / 20%), 0px 1px 0px 0px rgb(0 0 0 / 14%), 0px 1px 20px 0px rgb(0 0 0 / 12%);
  padding: 40px;
  border-radius: 8px;
  display: flex;
  /* flex-wrap: wrap; */
  overflow-x: scroll;
  gap: 40px;
  width: 400px;
`;

const Icon = styled.div`

`;

const Day07 = () => {
  return (
    <Container>
      <Flexbox>
        <Icon>
          <img src={salad} alt="" width={100} height={100} />
        </Icon>
        <Icon>
          <img src={pasta} alt="" width={100} height={100} />
        </Icon>
        <Icon>
          <img src={takoyaki} alt="" width={100} height={100} />
        </Icon>
        <Icon>
          <img src={frenchFries} alt="" width={100} height={100} />
        </Icon>
        <Icon>
          <img src={shavedIce} alt="" width={100} height={100} />
        </Icon>
      </Flexbox>
    </Container>
  );
};

// const Options = styled.div`
//   font-size: 32px;
//   display: grid;
//   grid-template-columns: repeat(3, 200px);
// `;

// const Option = styled.div`
//   input {
//     width: 24px;
//     height: 24px;
//     margin-right: 12px;
//   }
// `;

// const Box = styled.div`
//   width: 600px;
//   display: inline-block;
//   padding: 40px;
//   border-radius: 8px;
//   box-shadow: 0px 2px 0px -1px rgb(0 0 0 / 20%), 0px 1px 0px 0px rgb(0 0 0 / 14%), 0px 1px 20px 0px rgb(0 0 0 / 12%);
// `;

// const Chips = styled.div`
//   display: flex;
//   border: 1px solid #b9b9b9;
//   padding: 20px;
//   border-radius: 8px;
//   margin-bottom: 20px;
//   & > * {
//     margin-left: 8px;
//   }
// `;

// const Chip = styled.div`
//   font-size: 32px;
//   border: 2px solid #52caff;
//   border-radius: 50px;
//   padding: 4px 20px;
//   white-space: nowrap;
// `;

// const Day07 = () => {
//   const options = ['時事', '傢具', '園藝', '家電', '裝潢', '打獵', '泛舟', '衝浪', '自行車', '釣魚', '露營', '騎馬', '籃球', '足球', '排球', '游泳', '馬拉松']
//   return (
//     <Container>
//       <Box>
//         <Chips>
//           {
//             options.slice(0, 3).map((option) => (
//               <Chip>
//                 {option}
//               </Chip>
//             ))
//           }
//           <Chip>
//             {'使用者自己新增的名字特別長的標籤'}
//           </Chip>
//         </Chips>
//         <Options>
//           {
//             options.map((option) => (
//               <Option key={option}>
//                 <input type="checkbox" value={option.checked} />
//                 <label htmlFor="">{option}</label>
//               </Option>
//             ))
//           }
//         </Options>
//       </Box>
//     </Container>
//   )
// }

export default Day07;
