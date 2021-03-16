document.getElementById('burger').onclick = function () {

    var MobileMenu = document.getElementById('MobileMenu');
    var MainBody = document.getElementById('MainBody');
    var MobileMenuUl = document.getElementById('MobileMenuUl');


    if (MobileMenu.className == 'NonActive') {
        MobileMenu.className = 'Active';
        MainBody.className='overflow';
        // MobileMenuUl.className='MobileMenuUlActive';
    } else {
        MobileMenu.className = 'NonActive';
        MainBody.className='NonMenu';
        // MobileMenuUl.className='NonActive';
    }

       
}