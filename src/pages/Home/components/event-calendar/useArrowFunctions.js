import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export const useArrowFunctions = () => {
   function SampleNextArrow(props) {
      const { onClick } = props;
      return (
         <div className="button next__btn" onClick={onClick}>
            <RightOutlined />
         </div>
      );
   }

   function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
         <div className="button prev__btn" onClick={onClick}>
            <LeftOutlined />
         </div>
      );
   }
   return { SamplePrevArrow, SampleNextArrow };
}