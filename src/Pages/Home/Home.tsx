import { Carousel, Image, Card } from 'antd';
import './Home.css'

const { Meta } = Card;

const Home = () => {
    
    const imageDescription = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    return (
        <>
            <div className='home'>
                <Carousel autoplay>
                    <div>
                        <img className='carousel-image' src='https://picsum.photos/100' alt='Image Not loaded'/>
                    </div>
                    <div>
                        <img className='carousel-image' src='https://picsum.photos/200' alt='Image Not loaded'/>
                    </div>
                    <div>
                        <img className='carousel-image' src='https://picsum.photos/300' alt='Image Not loaded'/>
                    </div>
                    <div>
                        <img className='carousel-image' src='https://picsum.photos/400' alt='Image Not loaded'/>
                    </div>
                </Carousel>

                <h1 className='heading'>Farm to Table, Naturally<br/>
                Experience Pure, Organic Goodness</h1>
                <h4 className='sub-heading'>Locally grown, sustainably harvested, and delivered fresh to your door.</h4>

                <h1 className='heading-top-selling-product'>Our Blockbuster Products</h1>

                <Card
                    className='top-selling-product-card-holder-odd'
                    hoverable
                    cover={
                        <Image
                            width={500}
                            height={200}
                            src="https://picsum.photos/500/200"
                        />
                    }
                >
                    <Meta title="Europe Street beat" description={imageDescription} />
                </Card>

                <Card
                    className='top-selling-product-card-holder-even'
                    hoverable
                    cover={
                        <Image
                        width={500}
                        height={200}
                            src="https://picsum.photos/500/200"
                        />
                    }
                >
                    <Meta title="Europe Street beat" description={imageDescription} />
                </Card>

                <Card
                    className='top-selling-product-card-holder-odd'
                    hoverable
                    cover={
                        <Image
                            width={500}
                            height={200}
                            src="https://picsum.photos/500/200"
                        />
                    }
                >
                    <Meta title="Europe Street beat" description={imageDescription} />
                </Card>

                <Card
                    className='top-selling-product-card-holder-even'
                    hoverable
                    cover={
                        <Image
                            width={500}
                            height={200}
                            src="https://picsum.photos/500/200"
                        />
                    }
                >
                    <Meta title="Europe Street beat" description={imageDescription} />
                </Card>
                
            </div>
        </>
    )
}

export default Home;