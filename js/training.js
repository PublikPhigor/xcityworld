//training modal
const myTrainingModal = document.querySelector('.training-modal');
const openTrainingModalBtn = document.querySelector('.open-training-modal');
const closeTrainingModalBtn = document.querySelectorAll('.close-modal');
const trainingOverlay = document.querySelector('.training-overlay');

const openTrainingModal = () => {
    openTrainingModalBtn.addEventListener('click', () => {
        myTrainingModal.classList.add('active');
        trainingOverlay.classList.add('active');
        console.log('test');
    });

    closeTrainingModalBtn.forEach(closeTrainingBtn => {
        closeTrainingBtn.addEventListener('click', () => {
            myTrainingModal.classList.remove('active');
            trainingOverlay.classList.remove('active');
        });
    });
}

openTrainingModal();