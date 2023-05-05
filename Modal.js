//modal code, make sure you only have 1 modal
/** example modal html
 
     <div class="modal">
        <div class="close" onclick="closeModal()">
            <p>&times</p>
        </div>

        <div class="expcont">
        <!-- actual content here -->
        </div>

    </div>
 
 
 */


const modals = document.getElementsByClassName("modal");

function closeModal() {
    for (i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}

function openModal() {
    for (i = 0; i < modals.length; i++) {
        modals[i].style.display = 'block';
    }
}