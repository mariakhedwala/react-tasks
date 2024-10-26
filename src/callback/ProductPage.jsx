import ShippingForm from './ShippingForm.jsx';

export default function ProductPage({ productId, referrer }) {
    function handleSubmit(orderDetails) {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
        });
    }

    return (
        <div >
            <ShippingForm onSubmit={handleSubmit} />
        </div>
    );
}

function post(url, data) {
    // Imagine this sends a request...
    console.log('POST /' + url);
    console.log(data);
}
