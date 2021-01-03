import zipData from 'twzipcode-data';

const zipTw = zipData();
const zipEn = zipData('en');

const zip = (postcode) => {
	const tw = zipTw.zipcodes.find(x => x.id === ~~postcode);
	const en = zipEn.zipcodes.find(x => x.id === ~~postcode);

	return {
		id: postcode,
		city: tw.county,
		cityEn: en.county,
		district: tw.city,
		districtEn: en.city,
	};
}

export default zip;
