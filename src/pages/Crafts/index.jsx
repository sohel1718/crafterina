import React from "react";
import CustomModal from "../../hoc/CustomModal";
import CraftDetails from "./CraftDetails";

const Crafts = ({ history }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="rec-tabs">
                <div className="rec-tabs_tab-active">
                    Recommended
                </div>
                <div className="rec-tabs_tab">
                    All
                </div>
            </div>
            <div class="pin_container">
            <div class="card-crafts card_small"> 
                <img onClick={() => openModal()} src="/images/craft1.jpg" alt="" />
                <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM INSTAGRAM INSTAGRAM INSTAGRAM</span>
                    <img src="/images/origami.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_medium">
                <img src="/images/craft4.jpg" alt="" />
                <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_large">
            <img src="/images/craft6.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_medium">
            <img src="/images/craft7.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_small">
            <img src="/images/craft9.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_large">
            <img src="/images/craft11.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_medium">
            <img src="/images/craft12.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_small">
            <img src="/images/craft13.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_medium">
            <img src="/images/craft15.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_small">
            <img src="/images/image-1.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_medium">
            <img src="/images/image-2.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_large">
            <img src="/images/image-3.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_medium">
            <img src="/images/image-4.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_small">
            <img src="/images/image-5.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_medium">
            <img src="/images/craft1.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <div class="card-crafts card_large">
            <img src="/images/craft9.jpg" alt="" />
            <div class="card_bottom"> 
                    <span>Make a Hanging Cardinal INSTAGRAM</span>
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
            </div>
            <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal}  >
                <CraftDetails closeModal={closeModal} />
            </CustomModal>
        </div>
        </>
    )
}

export default Crafts