import { StarFilled } from '@ant-design/icons';
import './TestimnialsDescriprion.css'


const TestimonialsDescription = (props: { description: String }) => {
    
    const { description } = props;

    return (
        <>
            <div className='testimonials-description'>
                <p className='review'>{description}</p>
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <h3 className='name'>[Name]</h3>
                <h5 className='designation'>[Designation]</h5>
            </div>
        </>
    )
}

export default TestimonialsDescription;