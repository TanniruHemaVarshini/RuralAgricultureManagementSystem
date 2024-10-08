// Farmer registration
document.getElementById('registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const farmSize = document.getElementById('farmSize').value;
    const location = document.getElementById('location').value;
    const crops = document.getElementById('crops').value;

    alert(`Registered Farmer: ${name}\nAge: ${age}\nFarm Size: ${farmSize} acres\nLocation: ${location}\nCrops: ${crops}`);

    document.getElementById('registration-form').reset();
});

// Buyer registration
document.getElementById('buyer-registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const buyerName = document.getElementById('buyer-name').value;
    const buyerEmail = document.getElementById('buyer-email').value;
    const buyerPhone = document.getElementById('buyer-phone').value;

    alert(`Registered Buyer: ${buyerName}\nEmail: ${buyerEmail}\nPhone: ${buyerPhone}`);

    document.getElementById('buyer-registration-form').reset();
});
``
