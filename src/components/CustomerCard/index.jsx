import React from 'react';

const CustomerCard = () => {
    return (
        <div className="customer">
                    <span>What customer say</span>
                    <p>"Belara is an office building brand that contributes to people's rich work life by providing creative office space under the slogan "A BASE FOR GOOD LIFE."</p>
                    <div className="customer_tile">
                        <img src="/images/user.jpg" alt="" />
                        <div className="customer_tile_name">
                            <h1>Sohel Chhipa</h1>
                            <p>@sohelchhipa</p>
                        </div>
                    </div>
        </div>
    )
}

export default CustomerCard
