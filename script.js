const WA = '971503302905';
const link = new URL('https://wa.me/' + WA);
link.searchParams.set('text', 'Hello Elite Unisex Salon, I would like to book an appointment. Service: ');
document.querySelectorAll('.wa').forEach(a => a.href = link.href);
document.getElementById('yr').textContent = new Date().getFullYear();
