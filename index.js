const { Client, Buttons, List } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();


// client.on('qr', (qr) => {
//     console.log('QR RECEIVED', qr);
// });

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('ready', () => {
    console.log('Client is ready!');
});

// client.on('message', message => {
// 	console.log(message.body);
// });

client.on('message', message => {
	if(message.body === '!start') {
		setTimeout(() => {
		message.reply('Hallo selamat datang di restaurant mari tuang, ketik *!menu* untuk melihat detail menu restaurant');
	}, 3000);
	}else if(message.body === '!menu_list'){
		setTimeout( async () => {
		let sections = [
            { title: 'Pilih Menu pesanan', 
			rows: [
			{ 
				title: 'Steak: Rp. 50.000', 
				description: 'Deskripsi: Potongan daging sapi pilihan yang dipanggang sempurna, disajikan dengan saus lezat.' 
			}, 
			{ 
				title: 'Pasta: Rp. 35.000', 
				description: 'Deskripsi: Pilihan pasta al dente disajikan dengan saus bercita rasa khas, diberi sentuhan rempah-rempah.' 
			}, 
			{ 
				title: 'Nasi Goreng: Rp. 20.000', 
				description: 'Deskripsi: Nasi goreng spesial dengan campuran bumbu tradisional, disajikan dengan irisan telur mata sapi.' 
			}, 
			{ 
				title: 'Sushi: Rp. 50.000', 
				description: 'Deskripsi: Sushi segar dengan variasi topping yang beragam, disajikan dengan saus kedelai dan wasabi.' 
			}, 
			{ 
				title: 'Pizza: Rp. 30.000', 
				description: 'Deskripsi: Pizza lezat dengan berbagai topping, disajikan dengan roti yang renyah dan saus tomat khas.' 
			}, 
			{ 
				title: 'Ayam Goreng: Rp. 15.000', 
				description: 'Deskripsi: Potongan ayam yang digoreng garing di luar, tetapi tetap juicy di dalam, disajikan dengan saus spesial.' 
			}, 
			{ 
				title: 'Burger: Rp. 30.000', 
				description: 'Deskripsi: Burger lezat dengan patty daging sapi, disajikan dengan sayuran segar dan saus istimewa.' 
			}, 
			{ 
				title: 'Salmon Panggang: Rp. 50.000', 
				description: 'Deskripsi: Fillet salmon panggang dengan bumbu rempah yang lezat, disajikan dengan tambahan lemon.' 
			}, 
			{ 
				title: 'Rendang: Rp. 30.000', 
				description: 'Deskripsi: Rendang daging sapi yang dimasak dengan bumbu rempah khas Indonesia, memberikan cita rasa yang kaya dan lezat.' 
			}, 
		]}
        ];
        let list = new List('Berikut merupakan daftar menu Mari Tuang Resto', 'More Menu', sections, 'Daftar Menu', 'footer');
        client.sendMessage(message.from, list);
	}, 3000);
	}
});
 
 
 





client.initialize();
