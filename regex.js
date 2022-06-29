const visaPANRegex =
    /(^4\d{3}[-•\s]?\d{4}[-•\s]?\d{4}[-•\s]?\d{4}$)|(^4\d{3}[-•\s]?\d{4}[-•\s]?\d{4}[-•\s]?\d{3}$)/;

const mastercardPANRegex =
    /(^5[1-5]\d{2}[-•\s]?\d{4}[-•\s]?\d{4}[-•\s]?\d{4}$)|(^5[1-5]\d{2}[-•\s]?\d{4}[-•\s]?\d{4}[-•\s]?\d{3}$)/;

const americanExpressRegex = /^3[47]\d{2}[-•\s]?\d{6}[-•\s]?\d{5}$/;

const discoveryPANRegex = /^6011[-•\s]?\d{4}[-•\s]?\d{4}[-•\s]?\d{4}$/;

const dinersClubUS_CanadaRegex =
    /^5[45]\d{2}[-•\s]?\d{4}[-•\s]?\d{4}[-•\s]?\d{4}$/;

const ssnRegex =
    /^([0-8][0-9][1-9]|[0-8][1-9][0-9]|[1-8][0-9][0-9])[-•\s]?([0-9][1-9]|[1-9][0-9])[-•\s]?([0-9][0-9][0-9][1-9]|[0-9][0-9][1-9][0-9]|[0-9][1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/;

const isConsecutiveNumbersRegex = /^\b(\d)\1+[-•\s]?(\d)\1+[-•\s]?(\d)\1+\b$/;

// this will match consecutive numbers and chronological numbers 1-9
const isInvalidSSN =
    /^(111[-•\s]?11[-•\s]?1111)|(222[-•\s]?22[-•\s]?2222)|(333[-•\s]?33[-•\s]?3333)|(444[-•\s]?44[-•\s]?4444)|(555[-•\s]?55[-•\s]?5555)|(666[-•\s]?66[-•\s]?6666)|(777[-•\s]?77[-•\s]?7777)|(888[-•\s]?88[-•\s]?8888)|(123[-•\s]?45[-•\s]?6789)$/;

console.log(isInvalidSSN.test("222-22-2222"));
console.log(isInvalidSSN.test("123 45 6789"));
console.log(isInvalidSSN.test("111-11-1111"));
console.log(isConsecutiveNumbersRegex.test("222222"));
console.log(visaPANRegex.test("4191-9149-4215-716"));
console.log(mastercardPANRegex.test("5191 9149 4215 7165"));
console.log(americanExpressRegex.test("3740 341378 58136"));
console.log(discoveryPANRegex.test("6011 9149 4215 7165"));
console.log(dinersClubUS_CanadaRegex.test("5490 9149 4215 7165"));
console.log(ssnRegex.test("010-33-0000"));
console.log(ssnRegex.test("123456789"));
console.log(ssnRegex.test("010-00-000000000"));
console.log(ssnRegex.test("902-11-7838"));
console.log(ssnRegex.test("999-99-7838"));
console.log(ssnRegex.test("000-04-0000"));
console.log(ssnRegex.test("001-33-0000"));
console.log(ssnRegex.test("898-00-0000"));
console.log(ssnRegex.test("898-10-2333"));
console.log(ssnRegex.test("898-16-2333"));

// const removeSpaceHyphen = /\s|-|•/g;

// console.log("123456789012345".replace(removeSpaceHyphen, ""));
