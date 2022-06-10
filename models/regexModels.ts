// Contact
export const cellphoneRegex = /(^[0]{1}[678]{1}[0-9]{8}$)/
export const emailRegex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Licence
export const licenceNumberRegex = /(^[a-zA-Z0-9]{3,}$)/
export const registrationNumberRegex = /(^[a-zA-Z0-9]{3,}$)/
export const tareRegex = /(^[0-9]{3,}$)/
export const feesRegex = /(^[0-9]{1}\.[0-9]{1}$)/
export const makeRegex = /(^[a-zA-Z0-9 \- &ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿΤΟΥΑ]{3,}$)/
export const vinRegex = /(^[a-zA-Z0-9]{3,}$)/

// Dates
export const expiryDateRegex =
	/(^(190[0-9]|191[0-9]|192[0-9]|193[0-9]|194[0-9]|195[0-9]|196[0-9]|197[0-9]|198[0-9]|199[0-9]|200[0-9]|201[0-9]|202[0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$)/

// Personal
export const nameRegex = /(^[a-zA-Z \- ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/
export const idNumberRegex = /(^[0-9]{13}$)/

// Cards
export const xtraCardNumberRegex = /(^[9]{1}[7]{1}[1]{1}[0]{1}[0]{1}[0-9]{11}$)/

// Address
export const address1Regex = /(^[a-zA-Z0-9_\-, &ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/
export const address2Regex = /(^[a-zA-Z0-9_\-, &ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/
export const suburbRegex = /(^[a-zA-Z0-9_\-, &ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/
export const regionRegex = /(^[a-zA-Z\- ]{3,}$)/
export const postalCodeRegex = /(^[0-9]{4}$)/

// General
export const alphaRegex = /(^[a-zA-Z\-, &ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]$)/
export const numericRegex = /(^[0-9]{1,}$)/
export const alphaNumericRegex = /(^[a-zA-Z0-9\-, &ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{1,}$)/
export const numbericDotRegex = /(^[0-9.]$)/
