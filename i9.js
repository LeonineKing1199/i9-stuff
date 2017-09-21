'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

;window.I9Section2 = function () {

  var ListBCDocumentTypeId = 28;

  var ListADocumentData = [{
    documentTypeId: 13,
    citizenshipStatusCodes: [6],
    label: 'Permanent Resident Card (I-551)',
    inputs: [{
      label: 'Green Card Number',
      sivField: 'cardNumber'
    }, {
      label: 'Alien Number / USCIS Number',
      sivField: 'alienNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'permanentResidentCardIssuingAuthority'
    }]
  }, {
    documentTypeId: 17,
    citizenshipStatusCodes: [7],
    label: 'Employment Authorization Document (I-776)',
    inputs: [{
      label: 'Card Number',
      sivField: 'cardNumber'
    }, {
      label: 'Alien Number / USCIS Number',
      sivField: 'alienNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'i776IssuingAuthority'
    }, {
      label: 'Expiration Date (mm/dd/yyyy)',
      sivField: 'documentExpirationDate'
    }]
  }, {
    documentTypeId: 24,
    citizenshipStatusCodes: [7],
    label: 'Foreign Passport with I-94/I-94A',
    inputs: [{
      label: 'Passport Number',
      sivField: 'passportNumber'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'documentExpirationDate'
    }, {
      label: 'Country of Issuance Code',
      sivField: 'countryOfIssuanceCode'
    }, {
      label: 'I-94 Number',
      sivField: 'i94Number'
    }, {
      label: 'Visa Number (optional)',
      sivField: 'visaNumber'
    }]
  }, {
    documentTypeId: 25,
    citizenshipStatusCodes: [6],
    label: 'Foreign Passport With I-551 Stamp or MRIV',
    inputs: [{
      label: 'Passport Number',
      sivField: 'passportNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'i551StampIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'documentExpirationDate'
    }, {
      label: 'Alien Number',
      sivField: 'alienNumber'
    }]
  }, {
    documentTypeId: 29,
    citizenshipStatusCodes: [4, 5],
    label: 'U.S. Passport or Passport Card',
    inputs: [{
      label: 'Passport Number',
      sivField: 'passportNumber'
    }, {
      label: 'Expiration Date (mm/dd/yyyy)',
      sivField: 'documentExpirationDate'
    }, {
      label: 'Issuing Authority',
      sivField: 'usPassportIssuingAuthority'
    }]
  }];

  var ListBDocumentData = [{
    documentTypeId: 1,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'US Driver\'s License or ID card',
    inputs: [{
      label: 'License / ID Number',
      sivField: 'listBCDocumentNumber'
    }, {
      label: 'Issuing State / US Authority',
      sivField: 'issuingAuthorityCode'
    }, {
      label: 'Expiration Date (if any)',
      sivField: 'documentExpirationDate'
    }]
  }, {
    documentTypeId: 2,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'ID Card Issued by a US Government Agency',
    inputs: [{
      label: 'ID Number',
      sivField: 'idCardNumber'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'idCardExpirationDate'
    }, {
      label: 'Issuing Authority',
      sivField: 'listBIdCardIssuingAuthority'
    }]
  }, {
    documentTypeId: 3,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'School ID Card',
    inputs: [{
      label: 'ID Number',
      sivField: 'schoolIdCardNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'schoolIdIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'schoolIdCardExpirationDate'
    }]
  }, {
    documentTypeId: 4,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Voter Registration Card',
    inputs: [{
      label: 'VUID',
      sivField: 'voterRegistrationCardIdNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'voterCardIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'voterRegistrationCardExpirationDate'
    }]
  }, {
    documentTypeId: 5,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'US Military Card or Draft Record',
    inputs: [{
      label: 'DoD Identification Number',
      sivField: 'militaryCardIdNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'militaryCardIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'voterRegistrationCardExpirationDate'
    }]
  }, {
    documentTypeId: 6,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Military Dependent\'s ID Card',
    inputs: [{
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'voterRegistrationCardExpirationDate'
    }, {
      label: 'Issuing Authority',
      sivField: 'militaryDependentIssuingAuthority'
    }]
  }, {
    documentTypeId: 7,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'US Coast Guard Merchant Mariner Card',
    inputs: [{
      label: 'Document Number',
      sivField: 'merchantMarinerCardNumber'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'voterRegistrationCardExpirationDate'
    }]
  }, {
    documentTypeId: 8,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Native American Tribal Document',
    inputs: [{
      label: 'Issuing Authority',
      sivField: 'tribalDocumentIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'tribalDocumentExpirationDate'
    }]
  }, {
    documentTypeId: 9,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Canadian Driver\'s License',
    input: [{
      label: 'License Number',
      sivField: 'canadianDriversLicenseNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'canadianDriversLicenseIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      sivField: 'canadianDriversLicenseExpirationDate'
    }]
  }, {
    documentTypeId: 10,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'School Record or Report Card (under age 18)',
    input: [{
      label: 'Issuing Authority (School / Institution Name)',
      sivField: 'schoolIssuingAuthority'
    }]
  }, {
    documentTypeId: 11,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Clinic, Doctor or Hospital Record (under age 18)',
    input: [{
      label: 'Issuing Authority (Clinic, Doctor, Hospital)',
      sivField: 'medicalRecordIssuingAuthority'
    }]
  }, {
    documentTypeId: 12,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Day-Care or Nursery School Record (under age 18)',
    inputs: [{
      label: 'Issuing Authority',
      sivField: 'nurseryIssuingAuthority'
    }]
  }, {
    documentTypeId: 21,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Minor Under Age 18 Without a List B Document',
    input: []
  }, {
    documentTypeId: 22,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Special Placement',
    inputs: []
  }];

  var ListCDocumentData = [{
    documentTypeId: 13,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'US Social Security Card',
    inputs: [{
      label: 'SSN',
      sivField: 'ssn'
    }, {
      label: 'Issuing Authority',
      sivField: 'ssnIssuingAuthority'
    }]
  }, {
    documentTypeId: 14,
    citizenshipStatusCodes: [4, 5],
    label: 'Certification of Birth Abroad (Form FS-545)',
    inputs: [{
      label: 'Certificate Number',
      sivField: 'fs545CertificateNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'fs545IssuingAuthority'
    }]
  }, {
    documentTypeId: 15,
    citizenshipStatusCodes: [4, 5],
    label: 'Certification of Report of Birth (DS-1350)',
    inputs: [{
      label: 'Certificate Number',
      sivField: 'ds1350CertificateNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'ds1350IssuingAuthority'
    }]
  }, {
    documentTypeId: 16,
    citizenshipStatusCodes: [4, 5],
    label: 'US Birth Certificate (original or certified copy)',
    inputs: [{
      label: 'Certificate Number',
      sivField: 'usBirthCertificateNumber'
    }, {
      label: 'Issuing Authority (State that issued certificate)',
      sivField: 'birthCertificateIssuingAuthority'
    }]
  }, {
    documenTypeId: 17,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Native American Tribal Record',
    inputs: [{
      label: 'Document Number',
      sivField: 'listCTribalDocumentNumber'
    }, {
      label: 'Issuing Authority (Issuing Tribe)',
      sivField: 'listCTribalDocumentIssuingAuthority'
    }]
  }, {
    documentTypeId: 18,
    citizenshipStatusCodes: [4, 5],
    label: 'US Citizen ID Card (Form I-197)',
    inputs: [{
      label: 'Document Number',
      sivField: 'i197CitizenDocumentNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'i197CitizenIssuingAuthority'
    }]
  }, {
    documentTypeId: 19,
    citizenshipStatusCodes: [4, 5],
    label: 'ID Card for Use of Resident Citizen in the US (I-179)',
    inputs: [{
      label: 'Document Number',
      sivField: 'i179ResidentDocumentNumber'
    }, {
      label: 'Issuing Authority',
      sivField: 'i179ResidentIssuingAuthority'
    }]
  }, {
    documentTypeId: 20,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Employment authorization document issued by the DHS',
    inputs: [{
      label: 'Document Number',
      sivField: 'dhsEmploymentAuthDocumentNumber'
    }]
  }];

  // const makeTextInput = ({ id, labelText, initialValue , obj, key }) => {
  //   return [
  //     m('label', { for: id, class: 'f6 b db mb2' }, labelText),
  //     m('input', {
  //       onchange: m.withAttr('value', (val) => { obj[key] = val; }),
  //       name: id,
  //       id,
  //       value: initialValue,
  //       type: 'text',
  //       class: 'input-reset ba b--black-20 pa2 mb2 db w-100'
  //     })
  //   ]
  // };

  var makeLabelInputPair = function makeLabelInputPair(_ref) {
    var id = _ref.id,
        labelText = _ref.labelText,
        initialValue = _ref.initialValue,
        _ref$opts = _ref.opts,
        opts = _ref$opts === undefined ? {} : _ref$opts;

    return [m('label', { for: id, class: 'f6 b db mb2' }, labelText), m('input', _extends({
      name: id,
      id: id,
      value: initialValue,
      type: 'text',
      class: 'input-reset ba b--black-20 pa2 mb2 db w-100'
    }, opts))];
  };

  var Section1Info = {
    view: function view(vnode) {
      var _makeLabelInputPair, _makeLabelInputPair2, _makeLabelInputPair3;

      var statusCode = Number(vnode.attrs.citizenshipStatusCode);

      return m('div', { class: 'measure' }, [m('h2', 'Employee Information from Section 1')].concat(_toConsumableArray(makeLabelInputPair((_makeLabelInputPair = {
        id: 'lastName',
        labelText: 'Last Name',
        initialValue: vnode.attrs.lastName
      }, _defineProperty(_makeLabelInputPair, 'labelText', 'Last Name'), _defineProperty(_makeLabelInputPair, 'opts', { disabled: true }), _makeLabelInputPair))), _toConsumableArray(makeLabelInputPair((_makeLabelInputPair2 = {
        id: 'firstName',
        labelText: 'First Name',
        initialValue: vnode.attrs.firstName
      }, _defineProperty(_makeLabelInputPair2, 'labelText', 'First Name'), _defineProperty(_makeLabelInputPair2, 'opts', { disabled: true }), _makeLabelInputPair2))), _toConsumableArray(makeLabelInputPair((_makeLabelInputPair3 = {
        id: 'middleInitial',
        labelText: 'M.I.',
        initialValue: vnode.attrs.middleInitial
      }, _defineProperty(_makeLabelInputPair3, 'labelText', 'Middle Initial'), _defineProperty(_makeLabelInputPair3, 'opts', {
        disabled: true,
        maxlength: 1
      }), _makeLabelInputPair3))), [

      // citizenship/immigration status
      m('label', { for: 'citizenship-status' }, 'Citizenship / Immigration Status'), m('select', { id: 'citizenship-status', name: 'citizenshipStatusCode' }, [m('option', { value: -1, disabled: true, selected: statusCode === -1 }, 'Select the corresponding status'), m('option', { value: 4, selected: statusCode === 4 }, 'Citizen of the United States'), m('option', { value: 5, selected: statusCode === 5 }, 'National of the United States'), m('option', { value: 6, selected: statusCode === 6 }, 'Lawful Permanent Resident'), m('option', { value: 7, selected: statusCode === 7 }, 'Alien Authorized to Work')])]));
    }
  };

  var generateDocumentSelectOptions = function generateDocumentSelectOptions() {
    var citizenshipStatusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var currDocTypeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var docData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    return docData.filter(function (_ref2) {
      var citizenshipStatusCodes = _ref2.citizenshipStatusCodes;
      return citizenshipStatusCodes.includes(citizenshipStatusCode);
    }).map(function (_ref3) {
      var documentTypeId = _ref3.documentTypeId,
          label = _ref3.label;

      return m('option', {
        value: documentTypeId,
        selected: documentTypeId === currDocTypeId
      }, label);
    });
  };

  var ListBAndCDocumentSelect = {
    view: function view(vnode) {
      var documentTypeId = Number(vnode.attrs.documentTypeId);
      if (documentTypeId !== ListBCDocumentTypeId) {
        return null;
      }

      var citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      if (citizenshipStatusCode < 0) {
        return null;
      }

      var listBDocumentTypeId = Number(vnode.attrs.listBDocumentTypeId);
      var listBOptions = generateDocumentSelectOptions(citizenshipStatusCode, listBDocumentTypeId, ListBDocumentData);

      var listCDocumentTypeId = Number(vnode.attrs.listCDocumentTypeId);
      var listCOptions = generateDocumentSelectOptions(citizenshipStatusCode, listCDocumentTypeId, ListCDocumentData);

      return m('div', { class: 'measure' }, [m('select', { name: 'listBDocumentTypeId' }, [m('option', { selected: -1 === listBDocumentTypeId, disabled: true, value: -1 }, 'Please select a document')].concat(_toConsumableArray(listBOptions))), m('select', { name: 'listCDocumentTypeId' }, [m('option', { selected: -1 === listCDocumentTypeId, disabled: true, valeu: -1 }, 'Please select a document')].concat(_toConsumableArray(listCOptions)))]);
    }
  };

  var DocumentSelect = {
    view: function view(vnode) {
      var citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      var documentTypeId = Number(vnode.attrs.documentTypeId);

      if (citizenshipStatusCode < 0 || isNaN(citizenshipStatusCode)) {
        return m('div', { class: 'measure' }, [m('h2', 'Identity and Employment Authorization'), m('p', 'Please select a citizenship status code first')]);
      }

      var listADocs = generateDocumentSelectOptions(citizenshipStatusCode, documentTypeId, ListADocumentData);

      return m('div', { class: 'measure' }, [m('h2', 'Identity and Employment Authorization'), m('p', 'The employee presented me with:'), m('select', { name: 'documentTypeId' }, [m('option', { selected: -1 === documentTypeId, disabled: true, value: -1 }, 'Please select a document')].concat(_toConsumableArray(listADocs), [m('option', {
        selected: documentTypeId === ListBCDocumentTypeId,
        value: ListBCDocumentTypeId
      }, 'List B and C Documents')])), documentTypeId === ListBCDocumentTypeId ? m(ListBAndCDocumentSelect, vnode.attrs) : null]);
    }
  };

  var docDataToVNodes = function docDataToVNodes() {
    var documentTypeId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var vnode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var docDataSources = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];


    var documentData = docDataSources.find(function (docData) {
      return docData.documentTypeId == documentTypeId;
    });

    var inputs = documentData.inputs || [];
    var vnodes = inputs.reduce(function (vnodes, _ref4) {
      var label = _ref4.label,
          sivField = _ref4.sivField;

      var labelInputVNodePair = makeLabelInputPair({
        id: sivField,
        labelText: label,
        initialValue: vnode.attrs[sivField] || ''
      });
      return vnodes.concat(labelInputVNodePair);
    }, []);

    return vnodes;
  };

  var ListADocumentInfo = {
    view: function view(vnode) {
      var citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      var documentTypeId = Number(vnode.attrs.documentTypeId);

      if (citizenshipStatusCode < 0 || documentTypeId === ListBCDocumentTypeId || documentTypeId < 0) {
        return m('div', '');
      }

      return m('div', { class: 'measure' }, docDataToVNodes(documentTypeId, vnode, ListADocumentData));
    }
  };

  var ListBAndCDocumentInfo = {
    view: function view(vnode) {
      var _vnode$attrs = vnode.attrs,
          citizenshipStatusCode = _vnode$attrs.citizenshipStatusCode,
          documentTypeId = _vnode$attrs.documentTypeId,
          listBDocumentTypeId = _vnode$attrs.listBDocumentTypeId,
          listCDocumentTypeId = _vnode$attrs.listCDocumentTypeId;


      if ([citizenshipStatusCode, documentTypeId, listBDocumentTypeId, listCDocumentTypeId].includes(-1)) {
        return m('div', '');
      }

      return m('div', { class: 'measure' }, [m('div', [m('h2', 'List B Document Information', docDataToVNodes(listBDocumentTypeId, vnode, ListBDocumentData))]), m('div', [m('h2', 'List C Document Information', docDataToVNodes(listCDocumentTypeId, vnode, ListCDocumentData))])]);
    }
  };

  // const Certification = (i9Form) => ({
  //   view() {
  //     return m('div', [
  //       m('p', [
  //         m('strong', 'Certification:'),
  //         ' I attest, under penalty of perjury, that (1) I have examined the document(s) presented by the above-named employee, (2) the above-listed document(s) appear to be genuine and to relate to the employee named, and (3) to the best of my knowledge the employee is authorized to work in the United States.'
  //       ]),
  //       m('p', [
  //         m('strong', `The employee's first day of employment: `),
  //         m('span',
  //           m('input', {
  //             type: 'date',
  //             value: i9Form.hireDate,
  //             onchange: m.withAttr('value', (date) => { i9Form.hireDate = date; })
  //           }))
  //       ])
  //     ]);
  //   }
  // });

  // const EmployerInfo = (i9Form) => ({
  //   view() {
  //     return m('div', { class: 'measure' }, [
  //       m('h2', 'Employer Info'),

  //       m('label', { for: 'todays-date' }, `Today's Date:`),
  //       m('input', {
  //         onchange: m.withAttr('value', (date) => { i9Form.todaysDate = date; }),
  //         id: 'todays-date',
  //         value: i9Form.todaysDate,
  //         type: 'date'
  //       })
  //     ].concat(
  //       makeTextInput({
  //         id: 'employer-title',
  //         labelText: 'Title of Employer or Authorized Representative',
  //         initialValue: i9Form.employerTitle,
  //         obj: i9Form,
  //         key: 'employerTitle'
  //       }),
  //       makeTextInput({
  //         id: 'employer-last-name',
  //         labelText: 'Employer Last Name',
  //         initialValue: i9Form.employerLastName,
  //         obj: i9Form,
  //         key: 'employerLastName'
  //       }),
  //       makeTextInput({
  //         id: 'employer-first-name',
  //         labelText: 'Employer First Name',
  //         initialValue: i9Form.employerFirstName,
  //         obj: i9Form,
  //         key: 'employerFirstName'
  //       }),
  //       makeTextInput({
  //         id: 'employer-business-name',
  //         labelText: `Employer's Business or Organization Name`,
  //         initialValue: i9Form.employerName,
  //         obj: i9Form,
  //         key: 'employerName'
  //       }),
  //       makeTextInput({
  //         id: 'employer-address',
  //         labelText: `Employer's Business or Organization Address (Street Number and Name)`,
  //         initialValue: i9Form.employerAddress,
  //         obj: i9Form,
  //         key: 'employerAddress'
  //       }),
  //       makeTextInput({
  //         id: 'employer-city',
  //         labelText: 'City or Town',
  //         initialValue: i9Form.employerCity,
  //         obj: i9Form,
  //         key: 'employerCity'
  //       }),
  //       makeTextInput({
  //         id: 'employer-state',
  //         labelText: 'State',
  //         initialValue: i9Form.employerState,
  //         obj: i9Form,
  //         key: 'employerState'
  //       }),
  //       makeTextInput({
  //         id: 'employer-zip-code',
  //         labelText: 'ZIP Code',
  //         initialValue: i9Form.employerZipCode,
  //         obj: i9Form,
  //         key: 'employerZipCode'
  //       })
  //     ))
  //   }
  // });

  // const SubmitButton = (i9Form) => ({
  //   view() {
  //     const submitSection2 = (event) => {
  //       event.preventDefault();
  //       // m.request({
  //       //   method: 'POST',
  //       //   url: `/i9`,
  //       //   data: i9Form
  //       // }).then((resBody) => {
  //       //   console.log(resBody);
  //       // })
  //       console.log(`Someday we're going to submit the following data:`);
  //       console.log(i9Form);
  //     };

  //     return (
  //       m('div',
  //         m('input', {
  //           type: 'submit',
  //           class: 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib',
  //           value: 'Submit Section 2',
  //           onclick: submitSection2
  //         })));
  //   }
  // });

  var onFormChange = function onFormChange(i9FormData) {
    return function (event) {
      var key = event.target.name;
      var prop = i9FormData[event.target.name];

      console.log(key);

      i9FormData[key] = event.target.value;

      // TODO: refactor this behavior using proxies or something
      if (key === 'citizenshipStatusCode') {
        i9FormData.documentTypeId = -1;
        i9FormData.listBDocumentTypeId = -1;
        i9FormData.listCDocumentTypeId = -1;
      }

      if (key === 'documentTypeId') {
        i9FormData.listBDocumentTypeId = -1;
        i9FormData.listCDocumentTypeId = -1;
      }
    };
  };

  var I9FormDefaults = {
    documentTypeId: -1,
    listBDocumentTypeId: -1,
    listCDocumentTypeId: -1,
    lastName: '',
    firstName: '',
    middleInitial: '',
    citizenshipStatusCode: -1,
    passportNumber: '',
    documentExpirationDate: '',
    hireDate: '',
    todaysDate: '',
    submittingOfficialName: '',
    employerTitle: '',
    employerLastName: '',
    employerFirstName: '',
    employerName: '',
    employerAddress: '',
    employerCity: '',
    employerState: '',
    employerZipCode: ''
  };

  var I9Form = {
    view: function view(vnode) {
      var documentTypeId = Number(vnode.attrs.documentTypeId);

      return m('form', { onchange: onFormChange(vnode.attrs) }, [m(Section1Info, vnode.attrs), m(DocumentSelect, vnode.attrs), documentTypeId === ListBCDocumentTypeId ? m(ListBAndCDocumentInfo, vnode.attrs) : m(ListADocumentInfo, vnode.attrs)]);
    }
  };

  var I9Section2 = function () {
    function I9Section2() {
      var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, I9Section2);

      this.formData = _extends({}, I9FormDefaults, initialData);
    }

    _createClass(I9Section2, [{
      key: 'mount',
      value: function mount(element) {
        var formData = this.formData;
        m.mount(element, {
          view: function view() {
            return m(I9Form, formData);
          }
        });
      }
    }]);

    return I9Section2;
  }();

  return I9Section2;
}();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURRLEVBQ0Q7QUFDVixVQUFNLGlCQUFpQixPQUFPLE1BQU0sS0FBTixDQUFZLGNBQW5CLENBQXZCOztBQUVBLGFBQ0UsRUFBRSxNQUFGLEVBQVUsRUFBRSxVQUFVLGFBQWEsTUFBTSxLQUFuQixDQUFaLEVBQVYsRUFBbUQsQ0FDakQsRUFBRSxZQUFGLEVBQWdCLE1BQU0sS0FBdEIsQ0FEaUQsRUFFakQsRUFBRSxjQUFGLEVBQWtCLE1BQU0sS0FBeEIsQ0FGaUQsRUFJakQsbUJBQW1CLG9CQUFuQixHQUNFLEVBQUUscUJBQUYsRUFBeUIsTUFBTSxLQUEvQixDQURGLEdBRUUsRUFBRSxpQkFBRixFQUFxQixNQUFNLEtBQTNCLENBTitDLENBQW5ELENBREY7QUFTRDtBQWJZLEdBQWY7O0FBNTFCZ0MsTUE0MkIxQixVQTUyQjBCO0FBNjJCOUIsMEJBQThCO0FBQUEsVUFBbEIsV0FBa0IsdUVBQUosRUFBSTs7QUFBQTs7QUFDNUIsV0FBSyxRQUFMLGdCQUNLLGNBREwsRUFFSyxXQUZMO0FBSUQ7O0FBbDNCNkI7QUFBQTtBQUFBLDRCQW8zQnhCLE9BcDNCd0IsRUFvM0JmO0FBQ2IsWUFBTSxXQUFXLEtBQUssUUFBdEI7QUFDQSxVQUFFLEtBQUYsQ0FBUSxPQUFSLEVBQWlCO0FBQ2YsY0FEZSxrQkFDUjtBQUNMLG1CQUFPLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBUDtBQUNEO0FBSGMsU0FBakI7QUFLRDtBQTMzQjZCOztBQUFBO0FBQUE7O0FBKzNCaEMsU0FBTyxVQUFQO0FBRUQsQ0FqNEJxQixFQUFwQiIsImZpbGUiOiJpOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsgd2luZG93Lkk5U2VjdGlvbjIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgTGlzdEJDRG9jdW1lbnRUeXBlSWQgPSAyODtcblxuICBjb25zdCBMaXN0QURvY3VtZW50RGF0YSA9IFtcbiAgICB7XG4gICAgICBkb2N1bWVudFR5cGVJZDogMTMsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNl0sXG4gICAgICBsYWJlbDogJ1Blcm1hbmVudCBSZXNpZGVudCBDYXJkIChJLTU1MSknLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0dyZWVuIENhcmQgTnVtYmVyJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2NhcmROdW1iZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0FsaWVuIE51bWJlciAvIFVTQ0lTIE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdhbGllbk51bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAncGVybWFuZW50UmVzaWRlbnRDYXJkSXNzdWluZ0F1dGhvcml0eSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkb2N1bWVudFR5cGVJZDogMTcsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbN10sXG4gICAgICBsYWJlbDogJ0VtcGxveW1lbnQgQXV0aG9yaXphdGlvbiBEb2N1bWVudCAoSS03NzYpJyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdDYXJkIE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdjYXJkTnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdBbGllbiBOdW1iZXIgLyBVU0NJUyBOdW1iZXInLFxuICAgICAgICAgIHNpdkZpZWxkOiAnYWxpZW5OdW1iZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lzc3VpbmcgQXV0aG9yaXR5JyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2k3NzZJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdFeHBpcmF0aW9uIERhdGUgKG1tL2RkL3l5eXkpJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2RvY3VtZW50RXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDI0LFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzddLFxuICAgICAgbGFiZWw6ICdGb3JlaWduIFBhc3Nwb3J0IHdpdGggSS05NC9JLTk0QScsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUGFzc3BvcnQgTnVtYmVyJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3Bhc3Nwb3J0TnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdFeHBpcmF0aW9uIERhdGUgKG9wdGlvbmFsKSAobW0vZGQveXl5eSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnZG9jdW1lbnRFeHBpcmF0aW9uRGF0ZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnQ291bnRyeSBvZiBJc3N1YW5jZSBDb2RlJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2NvdW50cnlPZklzc3VhbmNlQ29kZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSS05NCBOdW1iZXInLFxuICAgICAgICAgIHNpdkZpZWxkOiAnaTk0TnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdWaXNhIE51bWJlciAob3B0aW9uYWwpJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3Zpc2FOdW1iZXInXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDI1LFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzZdLFxuICAgICAgbGFiZWw6ICdGb3JlaWduIFBhc3Nwb3J0IFdpdGggSS01NTEgU3RhbXAgb3IgTVJJVicsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUGFzc3BvcnQgTnVtYmVyJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3Bhc3Nwb3J0TnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdJc3N1aW5nIEF1dGhvcml0eScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdpNTUxU3RhbXBJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdFeHBpcmF0aW9uIERhdGUgKG9wdGlvbmFsKSAobW0vZGQveXl5eSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnZG9jdW1lbnRFeHBpcmF0aW9uRGF0ZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnQWxpZW4gTnVtYmVyJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2FsaWVuTnVtYmVyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRvY3VtZW50VHlwZUlkOiAyOSxcbiAgICAgIGNpdGl6ZW5zaGlwU3RhdHVzQ29kZXM6IFs0LCA1XSxcbiAgICAgIGxhYmVsOiAnVS5TLiBQYXNzcG9ydCBvciBQYXNzcG9ydCBDYXJkJyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdQYXNzcG9ydCBOdW1iZXInLFxuICAgICAgICAgIHNpdkZpZWxkOiAncGFzc3BvcnROdW1iZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0V4cGlyYXRpb24gRGF0ZSAobW0vZGQveXl5eSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnZG9jdW1lbnRFeHBpcmF0aW9uRGF0ZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAndXNQYXNzcG9ydElzc3VpbmdBdXRob3JpdHknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG5cbiAgY29uc3QgTGlzdEJEb2N1bWVudERhdGEgPSBbXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDEsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogYFVTIERyaXZlcidzIExpY2Vuc2Ugb3IgSUQgY2FyZGAsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTGljZW5zZSAvIElEIE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdsaXN0QkNEb2N1bWVudE51bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBTdGF0ZSAvIFVTIEF1dGhvcml0eScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdpc3N1aW5nQXV0aG9yaXR5Q29kZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnRXhwaXJhdGlvbiBEYXRlIChpZiBhbnkpJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2RvY3VtZW50RXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDIsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogJ0lEIENhcmQgSXNzdWVkIGJ5IGEgVVMgR292ZXJubWVudCBBZ2VuY3knLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lEIE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdpZENhcmROdW1iZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0V4cGlyYXRpb24gRGF0ZSAob3B0aW9uYWwpIChtbS9kZC95eXl5KScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdpZENhcmRFeHBpcmF0aW9uRGF0ZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnbGlzdEJJZENhcmRJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRvY3VtZW50VHlwZUlkOiAzLFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzQsIDUsIDYsIDddLFxuICAgICAgbGFiZWw6ICdTY2hvb2wgSUQgQ2FyZCcsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSUQgTnVtYmVyJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3NjaG9vbElkQ2FyZE51bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnc2Nob29sSWRJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdFeHBpcmF0aW9uIERhdGUgKG9wdGlvbmFsKSAobW0vZGQveXl5eSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnc2Nob29sSWRDYXJkRXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDQsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogJ1ZvdGVyIFJlZ2lzdHJhdGlvbiBDYXJkJyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdWVUlEJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3ZvdGVyUmVnaXN0cmF0aW9uQ2FyZElkTnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdJc3N1aW5nIEF1dGhvcml0eScsXG4gICAgICAgICAgc2l2RmllbGQ6ICd2b3RlckNhcmRJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdFeHBpcmF0aW9uIERhdGUgKG9wdGlvbmFsKSAobW0vZGQveXl5eSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAndm90ZXJSZWdpc3RyYXRpb25DYXJkRXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDUsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogJ1VTIE1pbGl0YXJ5IENhcmQgb3IgRHJhZnQgUmVjb3JkJyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdEb0QgSWRlbnRpZmljYXRpb24gTnVtYmVyJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ21pbGl0YXJ5Q2FyZElkTnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdJc3N1aW5nIEF1dGhvcml0eScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdtaWxpdGFyeUNhcmRJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdFeHBpcmF0aW9uIERhdGUgKG9wdGlvbmFsKSAobW0vZGQveXl5eSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAndm90ZXJSZWdpc3RyYXRpb25DYXJkRXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDYsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogYE1pbGl0YXJ5IERlcGVuZGVudCdzIElEIENhcmRgLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0V4cGlyYXRpb24gRGF0ZSAob3B0aW9uYWwpIChtbS9kZC95eXl5KScsXG4gICAgICAgICAgc2l2RmllbGQ6ICd2b3RlclJlZ2lzdHJhdGlvbkNhcmRFeHBpcmF0aW9uRGF0ZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnbWlsaXRhcnlEZXBlbmRlbnRJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRvY3VtZW50VHlwZUlkOiA3LFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzQsIDUsIDYsIDddLFxuICAgICAgbGFiZWw6ICdVUyBDb2FzdCBHdWFyZCBNZXJjaGFudCBNYXJpbmVyIENhcmQnLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0RvY3VtZW50IE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdtZXJjaGFudE1hcmluZXJDYXJkTnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdFeHBpcmF0aW9uIERhdGUgKG9wdGlvbmFsKSAobW0vZGQveXl5eSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAndm90ZXJSZWdpc3RyYXRpb25DYXJkRXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDgsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogJ05hdGl2ZSBBbWVyaWNhbiBUcmliYWwgRG9jdW1lbnQnLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lzc3VpbmcgQXV0aG9yaXR5JyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3RyaWJhbERvY3VtZW50SXNzdWluZ0F1dGhvcml0eSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnRXhwaXJhdGlvbiBEYXRlIChvcHRpb25hbCkgKG1tL2RkL3l5eXkpJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3RyaWJhbERvY3VtZW50RXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDksXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogYENhbmFkaWFuIERyaXZlcidzIExpY2Vuc2VgLFxuICAgICAgaW5wdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTGljZW5zZSBOdW1iZXInLFxuICAgICAgICAgIHNpdkZpZWxkOiAnY2FuYWRpYW5Ecml2ZXJzTGljZW5zZU51bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnY2FuYWRpYW5Ecml2ZXJzTGljZW5zZUlzc3VpbmdBdXRob3JpdHknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0V4cGlyYXRpb24gRGF0ZSAob3B0aW9uYWwpIChtbS9kZC95eXl5KScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdjYW5hZGlhbkRyaXZlcnNMaWNlbnNlRXhwaXJhdGlvbkRhdGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDEwLFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzQsIDUsIDYsIDddLFxuICAgICAgbGFiZWw6ICdTY2hvb2wgUmVjb3JkIG9yIFJlcG9ydCBDYXJkICh1bmRlciBhZ2UgMTgpJyxcbiAgICAgIGlucHV0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lzc3VpbmcgQXV0aG9yaXR5IChTY2hvb2wgLyBJbnN0aXR1dGlvbiBOYW1lKScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdzY2hvb2xJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRvY3VtZW50VHlwZUlkOiAxMSxcbiAgICAgIGNpdGl6ZW5zaGlwU3RhdHVzQ29kZXM6IFs0LCA1LCA2LCA3XSxcbiAgICAgIGxhYmVsOiAnQ2xpbmljLCBEb2N0b3Igb3IgSG9zcGl0YWwgUmVjb3JkICh1bmRlciBhZ2UgMTgpJyxcbiAgICAgIGlucHV0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lzc3VpbmcgQXV0aG9yaXR5IChDbGluaWMsIERvY3RvciwgSG9zcGl0YWwpJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ21lZGljYWxSZWNvcmRJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRvY3VtZW50VHlwZUlkOiAxMixcbiAgICAgIGNpdGl6ZW5zaGlwU3RhdHVzQ29kZXM6IFs0LCA1LCA2LCA3XSxcbiAgICAgIGxhYmVsOiAnRGF5LUNhcmUgb3IgTnVyc2VyeSBTY2hvb2wgUmVjb3JkICh1bmRlciBhZ2UgMTgpJyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdJc3N1aW5nIEF1dGhvcml0eScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdudXJzZXJ5SXNzdWluZ0F1dGhvcml0eSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkb2N1bWVudFR5cGVJZDogMjEsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogJ01pbm9yIFVuZGVyIEFnZSAxOCBXaXRob3V0IGEgTGlzdCBCIERvY3VtZW50JyxcbiAgICAgIGlucHV0OiBbXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkb2N1bWVudFR5cGVJZDogMjIsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogJ1NwZWNpYWwgUGxhY2VtZW50JyxcbiAgICAgIGlucHV0czogW11cbiAgICB9XG4gIF07XG5cbiAgY29uc3QgTGlzdENEb2N1bWVudERhdGEgPSBbXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDEzLFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzQsIDUsIDYgLDddLFxuICAgICAgbGFiZWw6ICdVUyBTb2NpYWwgU2VjdXJpdHkgQ2FyZCcsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnU1NOJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ3NzbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnc3NuSXNzdWluZ0F1dGhvcml0eSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkb2N1bWVudFR5cGVJZDogMTQsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNV0sXG4gICAgICBsYWJlbDogJ0NlcnRpZmljYXRpb24gb2YgQmlydGggQWJyb2FkIChGb3JtIEZTLTU0NSknLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0NlcnRpZmljYXRlIE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdmczU0NUNlcnRpZmljYXRlTnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdJc3N1aW5nIEF1dGhvcml0eScsXG4gICAgICAgICAgc2l2RmllbGQ6ICdmczU0NUlzc3VpbmdBdXRob3JpdHknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDE1LFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzQsIDVdLFxuICAgICAgbGFiZWw6ICdDZXJ0aWZpY2F0aW9uIG9mIFJlcG9ydCBvZiBCaXJ0aCAoRFMtMTM1MCknLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0NlcnRpZmljYXRlIE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdkczEzNTBDZXJ0aWZpY2F0ZU51bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnZHMxMzUwSXNzdWluZ0F1dGhvcml0eSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkb2N1bWVudFR5cGVJZDogMTYsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNV0sXG4gICAgICBsYWJlbDogJ1VTIEJpcnRoIENlcnRpZmljYXRlIChvcmlnaW5hbCBvciBjZXJ0aWZpZWQgY29weSknLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0NlcnRpZmljYXRlIE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICd1c0JpcnRoQ2VydGlmaWNhdGVOdW1iZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lzc3VpbmcgQXV0aG9yaXR5IChTdGF0ZSB0aGF0IGlzc3VlZCBjZXJ0aWZpY2F0ZSknLFxuICAgICAgICAgIHNpdkZpZWxkOiAnYmlydGhDZXJ0aWZpY2F0ZUlzc3VpbmdBdXRob3JpdHknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lblR5cGVJZDogMTcsXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNSwgNiwgN10sXG4gICAgICBsYWJlbDogJ05hdGl2ZSBBbWVyaWNhbiBUcmliYWwgUmVjb3JkJyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdEb2N1bWVudCBOdW1iZXInLFxuICAgICAgICAgIHNpdkZpZWxkOiAnbGlzdENUcmliYWxEb2N1bWVudE51bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSXNzdWluZyBBdXRob3JpdHkgKElzc3VpbmcgVHJpYmUpJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2xpc3RDVHJpYmFsRG9jdW1lbnRJc3N1aW5nQXV0aG9yaXR5J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRvY3VtZW50VHlwZUlkOiAxOCxcbiAgICAgIGNpdGl6ZW5zaGlwU3RhdHVzQ29kZXM6IFs0LCA1XSxcbiAgICAgIGxhYmVsOiAnVVMgQ2l0aXplbiBJRCBDYXJkIChGb3JtIEktMTk3KScsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnRG9jdW1lbnQgTnVtYmVyJyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2kxOTdDaXRpemVuRG9jdW1lbnROdW1iZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lzc3VpbmcgQXV0aG9yaXR5JyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2kxOTdDaXRpemVuSXNzdWluZ0F1dGhvcml0eSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkb2N1bWVudFR5cGVJZDogMTksXG4gICAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGVzOiBbNCwgNV0sXG4gICAgICBsYWJlbDogJ0lEIENhcmQgZm9yIFVzZSBvZiBSZXNpZGVudCBDaXRpemVuIGluIHRoZSBVUyAoSS0xNzkpJyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdEb2N1bWVudCBOdW1iZXInLFxuICAgICAgICAgIHNpdkZpZWxkOiAnaTE3OVJlc2lkZW50RG9jdW1lbnROdW1iZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0lzc3VpbmcgQXV0aG9yaXR5JyxcbiAgICAgICAgICBzaXZGaWVsZDogJ2kxNzlSZXNpZGVudElzc3VpbmdBdXRob3JpdHknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgZG9jdW1lbnRUeXBlSWQ6IDIwLFxuICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlczogWzQsIDUsIDYsIDddLFxuICAgICAgbGFiZWw6ICdFbXBsb3ltZW50IGF1dGhvcml6YXRpb24gZG9jdW1lbnQgaXNzdWVkIGJ5IHRoZSBESFMnLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0RvY3VtZW50IE51bWJlcicsXG4gICAgICAgICAgc2l2RmllbGQ6ICdkaHNFbXBsb3ltZW50QXV0aERvY3VtZW50TnVtYmVyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuXG4gIC8vIGNvbnN0IG1ha2VUZXh0SW5wdXQgPSAoeyBpZCwgbGFiZWxUZXh0LCBpbml0aWFsVmFsdWUgLCBvYmosIGtleSB9KSA9PiB7XG4gIC8vICAgcmV0dXJuIFtcbiAgLy8gICAgIG0oJ2xhYmVsJywgeyBmb3I6IGlkLCBjbGFzczogJ2Y2IGIgZGIgbWIyJyB9LCBsYWJlbFRleHQpLFxuICAvLyAgICAgbSgnaW5wdXQnLCB7XG4gIC8vICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsICh2YWwpID0+IHsgb2JqW2tleV0gPSB2YWw7IH0pLFxuICAvLyAgICAgICBuYW1lOiBpZCxcbiAgLy8gICAgICAgaWQsXG4gIC8vICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gIC8vICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgLy8gICAgICAgY2xhc3M6ICdpbnB1dC1yZXNldCBiYSBiLS1ibGFjay0yMCBwYTIgbWIyIGRiIHctMTAwJ1xuICAvLyAgICAgfSlcbiAgLy8gICBdXG4gIC8vIH07XG5cbiAgY29uc3QgbWFrZUxhYmVsSW5wdXRQYWlyICA9ICh7IGlkLCBsYWJlbFRleHQsIGluaXRpYWxWYWx1ZSwgb3B0cyA9IHt9IH0pID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgbSgnbGFiZWwnLCB7IGZvcjogaWQsIGNsYXNzOiAnZjYgYiBkYiBtYjInIH0sIGxhYmVsVGV4dCksXG4gICAgICBtKCdpbnB1dCcsIHtcbiAgICAgICAgbmFtZTogaWQsXG4gICAgICAgIGlkLFxuICAgICAgICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNsYXNzOiAnaW5wdXQtcmVzZXQgYmEgYi0tYmxhY2stMjAgcGEyIG1iMiBkYiB3LTEwMCcsXG4gICAgICAgIC4uLm9wdHNcbiAgICAgIH0pXG4gICAgXTtcbiAgfTtcblxuICBjb25zdCBTZWN0aW9uMUluZm8gPSB7XG4gICAgdmlldyh2bm9kZSkge1xuICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IE51bWJlcih2bm9kZS5hdHRycy5jaXRpemVuc2hpcFN0YXR1c0NvZGUpO1xuXG4gICAgICByZXR1cm4gbSgnZGl2JywgeyBjbGFzczogJ21lYXN1cmUnIH0sIFtcbiAgICAgICAgbSgnaDInLCAnRW1wbG95ZWUgSW5mb3JtYXRpb24gZnJvbSBTZWN0aW9uIDEnKSxcblxuICAgICAgICAuLi5tYWtlTGFiZWxJbnB1dFBhaXIoe1xuICAgICAgICAgIGlkOiAnbGFzdE5hbWUnLFxuICAgICAgICAgIGxhYmVsVGV4dDogJ0xhc3QgTmFtZScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiB2bm9kZS5hdHRycy5sYXN0TmFtZSxcbiAgICAgICAgICBsYWJlbFRleHQ6ICdMYXN0IE5hbWUnLFxuICAgICAgICAgIG9wdHM6IHsgZGlzYWJsZWQ6IHRydWUgfVxuICAgICAgICB9KSxcblxuICAgICAgICAuLi5tYWtlTGFiZWxJbnB1dFBhaXIoe1xuICAgICAgICAgIGlkOiAnZmlyc3ROYW1lJyxcbiAgICAgICAgICBsYWJlbFRleHQ6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHZub2RlLmF0dHJzLmZpcnN0TmFtZSxcbiAgICAgICAgICBsYWJlbFRleHQ6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgICBvcHRzOiB7IGRpc2FibGVkOiB0cnVlIH1cbiAgICAgICAgfSksXG5cbiAgICAgICAgLi4ubWFrZUxhYmVsSW5wdXRQYWlyKHtcbiAgICAgICAgICBpZDogJ21pZGRsZUluaXRpYWwnLFxuICAgICAgICAgIGxhYmVsVGV4dDogJ00uSS4nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogdm5vZGUuYXR0cnMubWlkZGxlSW5pdGlhbCxcbiAgICAgICAgICBsYWJlbFRleHQ6ICdNaWRkbGUgSW5pdGlhbCcsXG4gICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBtYXhsZW5ndGg6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIGNpdGl6ZW5zaGlwL2ltbWlncmF0aW9uIHN0YXR1c1xuICAgICAgICBtKCdsYWJlbCcsIHsgZm9yOiAnY2l0aXplbnNoaXAtc3RhdHVzJyB9LCAnQ2l0aXplbnNoaXAgLyBJbW1pZ3JhdGlvbiBTdGF0dXMnKSxcbiAgICAgICAgbSgnc2VsZWN0JywgeyBpZDogJ2NpdGl6ZW5zaGlwLXN0YXR1cycsIG5hbWU6ICdjaXRpemVuc2hpcFN0YXR1c0NvZGUnIH0sIFtcbiAgICAgICAgICBtKCdvcHRpb24nLCB7IHZhbHVlOiAtMSwgZGlzYWJsZWQ6IHRydWUsIHNlbGVjdGVkOiBzdGF0dXNDb2RlID09PSAtMSAgfSwgJ1NlbGVjdCB0aGUgY29ycmVzcG9uZGluZyBzdGF0dXMnKSxcbiAgICAgICAgICBtKCdvcHRpb24nLCB7IHZhbHVlOiA0LCBzZWxlY3RlZDogc3RhdHVzQ29kZSA9PT0gNCB9LCAnQ2l0aXplbiBvZiB0aGUgVW5pdGVkIFN0YXRlcycpLFxuICAgICAgICAgIG0oJ29wdGlvbicsIHsgdmFsdWU6IDUsIHNlbGVjdGVkOiBzdGF0dXNDb2RlID09PSA1IH0sICdOYXRpb25hbCBvZiB0aGUgVW5pdGVkIFN0YXRlcycpLFxuICAgICAgICAgIG0oJ29wdGlvbicsIHsgdmFsdWU6IDYsIHNlbGVjdGVkOiBzdGF0dXNDb2RlID09PSA2IH0sICdMYXdmdWwgUGVybWFuZW50IFJlc2lkZW50JyksXG4gICAgICAgICAgbSgnb3B0aW9uJywgeyB2YWx1ZTogNywgc2VsZWN0ZWQ6IHN0YXR1c0NvZGUgPT09IDcgfSwgJ0FsaWVuIEF1dGhvcml6ZWQgdG8gV29yaycpXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVEb2N1bWVudFNlbGVjdE9wdGlvbnMgPSAoY2l0aXplbnNoaXBTdGF0dXNDb2RlID0gLTEsIGN1cnJEb2NUeXBlSWQgPSAtMSwgZG9jRGF0YSA9IFtdKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGRvY0RhdGFcbiAgICAgICAgLmZpbHRlcigoeyBjaXRpemVuc2hpcFN0YXR1c0NvZGVzIH0pID0+IGNpdGl6ZW5zaGlwU3RhdHVzQ29kZXMuaW5jbHVkZXMoY2l0aXplbnNoaXBTdGF0dXNDb2RlKSlcbiAgICAgICAgLm1hcCgoeyBkb2N1bWVudFR5cGVJZCwgbGFiZWwgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBtKFxuICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBkb2N1bWVudFR5cGVJZCxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGRvY3VtZW50VHlwZUlkID09PSBjdXJyRG9jVHlwZUlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWwpO1xuICAgICAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgTGlzdEJBbmRDRG9jdW1lbnRTZWxlY3QgPSB7XG4gICAgdmlldyh2bm9kZSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRUeXBlSWQgPSBOdW1iZXIodm5vZGUuYXR0cnMuZG9jdW1lbnRUeXBlSWQpO1xuICAgICAgaWYgKGRvY3VtZW50VHlwZUlkICE9PSBMaXN0QkNEb2N1bWVudFR5cGVJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2l0aXplbnNoaXBTdGF0dXNDb2RlID0gTnVtYmVyKHZub2RlLmF0dHJzLmNpdGl6ZW5zaGlwU3RhdHVzQ29kZSk7XG4gICAgICBpZiAoY2l0aXplbnNoaXBTdGF0dXNDb2RlIDwgMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGlzdEJEb2N1bWVudFR5cGVJZCA9IE51bWJlcih2bm9kZS5hdHRycy5saXN0QkRvY3VtZW50VHlwZUlkKTtcbiAgICAgIGNvbnN0IGxpc3RCT3B0aW9ucyA9IGdlbmVyYXRlRG9jdW1lbnRTZWxlY3RPcHRpb25zKGNpdGl6ZW5zaGlwU3RhdHVzQ29kZSwgbGlzdEJEb2N1bWVudFR5cGVJZCwgTGlzdEJEb2N1bWVudERhdGEpO1xuXG4gICAgICBjb25zdCBsaXN0Q0RvY3VtZW50VHlwZUlkID0gTnVtYmVyKHZub2RlLmF0dHJzLmxpc3RDRG9jdW1lbnRUeXBlSWQpO1xuICAgICAgY29uc3QgbGlzdENPcHRpb25zID0gZ2VuZXJhdGVEb2N1bWVudFNlbGVjdE9wdGlvbnMoY2l0aXplbnNoaXBTdGF0dXNDb2RlLCBsaXN0Q0RvY3VtZW50VHlwZUlkLCBMaXN0Q0RvY3VtZW50RGF0YSk7XG5cbiAgICAgIHJldHVybiBtKCdkaXYnLCB7IGNsYXNzOiAnbWVhc3VyZScgfSxcbiAgICAgICAgW1xuICAgICAgICAgIG0oJ3NlbGVjdCcsIHsgbmFtZTogJ2xpc3RCRG9jdW1lbnRUeXBlSWQnIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgbSgnb3B0aW9uJywgeyBzZWxlY3RlZDogLTEgPT09IGxpc3RCRG9jdW1lbnRUeXBlSWQsIGRpc2FibGVkOiB0cnVlLCB2YWx1ZTogLTEgfSwgJ1BsZWFzZSBzZWxlY3QgYSBkb2N1bWVudCcpLFxuICAgICAgICAgICAgLi4ubGlzdEJPcHRpb25zXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbSgnc2VsZWN0JywgeyBuYW1lOiAnbGlzdENEb2N1bWVudFR5cGVJZCcgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBtKCdvcHRpb24nLCB7IHNlbGVjdGVkOiAtMSA9PT0gbGlzdENEb2N1bWVudFR5cGVJZCwgZGlzYWJsZWQ6IHRydWUsIHZhbGV1OiAtMX0sICdQbGVhc2Ugc2VsZWN0IGEgZG9jdW1lbnQnKSxcbiAgICAgICAgICAgIC4uLmxpc3RDT3B0aW9uc1xuICAgICAgICAgIF0pXG4gICAgICAgIF0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBEb2N1bWVudFNlbGVjdCA9IHtcbiAgICB2aWV3KHZub2RlKSB7XG4gICAgICBjb25zdCBjaXRpemVuc2hpcFN0YXR1c0NvZGUgPSBOdW1iZXIodm5vZGUuYXR0cnMuY2l0aXplbnNoaXBTdGF0dXNDb2RlKTtcbiAgICAgIGNvbnN0IGRvY3VtZW50VHlwZUlkICAgICAgICAgPSBOdW1iZXIodm5vZGUuYXR0cnMuZG9jdW1lbnRUeXBlSWQpO1xuXG4gICAgICBpZiAoY2l0aXplbnNoaXBTdGF0dXNDb2RlIDwgMCB8fCBpc05hTihjaXRpemVuc2hpcFN0YXR1c0NvZGUpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbSgnZGl2JywgeyBjbGFzczogJ21lYXN1cmUnIH0sIFtcbiAgICAgICAgICAgIG0oJ2gyJywgJ0lkZW50aXR5IGFuZCBFbXBsb3ltZW50IEF1dGhvcml6YXRpb24nKSxcbiAgICAgICAgICAgIG0oJ3AnLCAnUGxlYXNlIHNlbGVjdCBhIGNpdGl6ZW5zaGlwIHN0YXR1cyBjb2RlIGZpcnN0JyksXG4gICAgICAgICAgXSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsaXN0QURvY3MgPSBnZW5lcmF0ZURvY3VtZW50U2VsZWN0T3B0aW9ucyhjaXRpemVuc2hpcFN0YXR1c0NvZGUsIGRvY3VtZW50VHlwZUlkLCBMaXN0QURvY3VtZW50RGF0YSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIG0oJ2RpdicsIHsgY2xhc3M6ICdtZWFzdXJlJyB9LCBbXG4gICAgICAgICAgbSgnaDInLCAnSWRlbnRpdHkgYW5kIEVtcGxveW1lbnQgQXV0aG9yaXphdGlvbicpLFxuICAgICAgICAgIG0oJ3AnLCAnVGhlIGVtcGxveWVlIHByZXNlbnRlZCBtZSB3aXRoOicpLFxuXG4gICAgICAgICAgbSgnc2VsZWN0JywgeyBuYW1lOiAnZG9jdW1lbnRUeXBlSWQnIH0sIFtcbiAgICAgICAgICAgIG0oJ29wdGlvbicsIHsgc2VsZWN0ZWQ6IC0xID09PSBkb2N1bWVudFR5cGVJZCwgZGlzYWJsZWQ6IHRydWUsIHZhbHVlOiAtMSB9LCAnUGxlYXNlIHNlbGVjdCBhIGRvY3VtZW50JyksXG4gICAgICAgICAgICAuLi5saXN0QURvY3MsXG4gICAgICAgICAgICBtKFxuICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBkb2N1bWVudFR5cGVJZCA9PT0gTGlzdEJDRG9jdW1lbnRUeXBlSWQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IExpc3RCQ0RvY3VtZW50VHlwZUlkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdMaXN0IEIgYW5kIEMgRG9jdW1lbnRzJylcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIGRvY3VtZW50VHlwZUlkID09PSBMaXN0QkNEb2N1bWVudFR5cGVJZFxuICAgICAgICAgID8gbShMaXN0QkFuZENEb2N1bWVudFNlbGVjdCwgdm5vZGUuYXR0cnMpXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIF0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZG9jRGF0YVRvVk5vZGVzID0gKGRvY3VtZW50VHlwZUlkID0gLTEsIHZub2RlID0ge30sIGRvY0RhdGFTb3VyY2VzID0gW10pID0+IHtcblxuICAgIGNvbnN0IGRvY3VtZW50RGF0YSA9IGRvY0RhdGFTb3VyY2VzLmZpbmQoXG4gICAgICAoZG9jRGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jRGF0YS5kb2N1bWVudFR5cGVJZCA9PSBkb2N1bWVudFR5cGVJZDtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnREYXRhLmlucHV0cyB8fCBbXTtcbiAgICBjb25zdCB2bm9kZXMgPSBpbnB1dHMucmVkdWNlKFxuICAgICAgKHZub2RlcywgeyBsYWJlbCwgc2l2RmllbGQgfSkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbElucHV0Vk5vZGVQYWlyID0gbWFrZUxhYmVsSW5wdXRQYWlyKHtcbiAgICAgICAgICBpZDogc2l2RmllbGQsXG4gICAgICAgICAgbGFiZWxUZXh0OiBsYWJlbCxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHZub2RlLmF0dHJzW3NpdkZpZWxkXSB8fCAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZub2Rlcy5jb25jYXQobGFiZWxJbnB1dFZOb2RlUGFpcik7XG4gICAgICB9LFxuICAgICAgW10pO1xuXG4gICAgcmV0dXJuIHZub2RlcztcbiAgfTtcblxuICBjb25zdCBMaXN0QURvY3VtZW50SW5mbyA9IHtcbiAgICB2aWV3KHZub2RlKSB7XG4gICAgICBjb25zdCBjaXRpemVuc2hpcFN0YXR1c0NvZGUgPSBOdW1iZXIodm5vZGUuYXR0cnMuY2l0aXplbnNoaXBTdGF0dXNDb2RlKTtcbiAgICAgIGNvbnN0IGRvY3VtZW50VHlwZUlkICAgICAgICA9IE51bWJlcih2bm9kZS5hdHRycy5kb2N1bWVudFR5cGVJZCk7XG5cbiAgICAgIGlmIChjaXRpemVuc2hpcFN0YXR1c0NvZGUgPCAwIHx8IGRvY3VtZW50VHlwZUlkID09PSBMaXN0QkNEb2N1bWVudFR5cGVJZCB8fCBkb2N1bWVudFR5cGVJZCA8IDApIHtcbiAgICAgICAgcmV0dXJuIG0oJ2RpdicsICcnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG0oXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzOiAnbWVhc3VyZScgfSxcbiAgICAgICAgZG9jRGF0YVRvVk5vZGVzKGRvY3VtZW50VHlwZUlkLCB2bm9kZSwgTGlzdEFEb2N1bWVudERhdGEpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgTGlzdEJBbmRDRG9jdW1lbnRJbmZvID0ge1xuICAgICAgdmlldyh2bm9kZSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlLFxuICAgICAgICAgIGRvY3VtZW50VHlwZUlkLFxuICAgICAgICAgIGxpc3RCRG9jdW1lbnRUeXBlSWQsXG4gICAgICAgICAgbGlzdENEb2N1bWVudFR5cGVJZCB9ID0gdm5vZGUuYXR0cnM7XG5cbiAgICAgICAgaWYgKFtjaXRpemVuc2hpcFN0YXR1c0NvZGUsIGRvY3VtZW50VHlwZUlkLCBsaXN0QkRvY3VtZW50VHlwZUlkLCBsaXN0Q0RvY3VtZW50VHlwZUlkXS5pbmNsdWRlcygtMSkpIHtcbiAgICAgICAgICByZXR1cm4gbSgnZGl2JywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG0oXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzczogJ21lYXN1cmUnIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgbSgnZGl2JyxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgbSgnaDInLCAnTGlzdCBCIERvY3VtZW50IEluZm9ybWF0aW9uJywgZG9jRGF0YVRvVk5vZGVzKGxpc3RCRG9jdW1lbnRUeXBlSWQsIHZub2RlLCBMaXN0QkRvY3VtZW50RGF0YSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBtKCdkaXYnLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBtKCdoMicsICdMaXN0IEMgRG9jdW1lbnQgSW5mb3JtYXRpb24nLCBkb2NEYXRhVG9WTm9kZXMobGlzdENEb2N1bWVudFR5cGVJZCwgdm5vZGUsIExpc3RDRG9jdW1lbnREYXRhKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSk7XG4gICAgICB9XG4gIH07XG5cbiAgLy8gY29uc3QgQ2VydGlmaWNhdGlvbiA9IChpOUZvcm0pID0+ICh7XG4gIC8vICAgdmlldygpIHtcbiAgLy8gICAgIHJldHVybiBtKCdkaXYnLCBbXG4gIC8vICAgICAgIG0oJ3AnLCBbXG4gIC8vICAgICAgICAgbSgnc3Ryb25nJywgJ0NlcnRpZmljYXRpb246JyksXG4gIC8vICAgICAgICAgJyBJIGF0dGVzdCwgdW5kZXIgcGVuYWx0eSBvZiBwZXJqdXJ5LCB0aGF0ICgxKSBJIGhhdmUgZXhhbWluZWQgdGhlIGRvY3VtZW50KHMpIHByZXNlbnRlZCBieSB0aGUgYWJvdmUtbmFtZWQgZW1wbG95ZWUsICgyKSB0aGUgYWJvdmUtbGlzdGVkIGRvY3VtZW50KHMpIGFwcGVhciB0byBiZSBnZW51aW5lIGFuZCB0byByZWxhdGUgdG8gdGhlIGVtcGxveWVlIG5hbWVkLCBhbmQgKDMpIHRvIHRoZSBiZXN0IG9mIG15IGtub3dsZWRnZSB0aGUgZW1wbG95ZWUgaXMgYXV0aG9yaXplZCB0byB3b3JrIGluIHRoZSBVbml0ZWQgU3RhdGVzLidcbiAgLy8gICAgICAgXSksXG4gIC8vICAgICAgIG0oJ3AnLCBbXG4gIC8vICAgICAgICAgbSgnc3Ryb25nJywgYFRoZSBlbXBsb3llZSdzIGZpcnN0IGRheSBvZiBlbXBsb3ltZW50OiBgKSxcbiAgLy8gICAgICAgICBtKCdzcGFuJyxcbiAgLy8gICAgICAgICAgIG0oJ2lucHV0Jywge1xuICAvLyAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gIC8vICAgICAgICAgICAgIHZhbHVlOiBpOUZvcm0uaGlyZURhdGUsXG4gIC8vICAgICAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIChkYXRlKSA9PiB7IGk5Rm9ybS5oaXJlRGF0ZSA9IGRhdGU7IH0pXG4gIC8vICAgICAgICAgICB9KSlcbiAgLy8gICAgICAgXSlcbiAgLy8gICAgIF0pO1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgLy8gY29uc3QgRW1wbG95ZXJJbmZvID0gKGk5Rm9ybSkgPT4gKHtcbiAgLy8gICB2aWV3KCkge1xuICAvLyAgICAgcmV0dXJuIG0oJ2RpdicsIHsgY2xhc3M6ICdtZWFzdXJlJyB9LCBbXG4gIC8vICAgICAgIG0oJ2gyJywgJ0VtcGxveWVyIEluZm8nKSxcblxuICAvLyAgICAgICBtKCdsYWJlbCcsIHsgZm9yOiAndG9kYXlzLWRhdGUnIH0sIGBUb2RheSdzIERhdGU6YCksXG4gIC8vICAgICAgIG0oJ2lucHV0Jywge1xuICAvLyAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIChkYXRlKSA9PiB7IGk5Rm9ybS50b2RheXNEYXRlID0gZGF0ZTsgfSksXG4gIC8vICAgICAgICAgaWQ6ICd0b2RheXMtZGF0ZScsXG4gIC8vICAgICAgICAgdmFsdWU6IGk5Rm9ybS50b2RheXNEYXRlLFxuICAvLyAgICAgICAgIHR5cGU6ICdkYXRlJ1xuICAvLyAgICAgICB9KVxuICAvLyAgICAgXS5jb25jYXQoXG4gIC8vICAgICAgIG1ha2VUZXh0SW5wdXQoe1xuICAvLyAgICAgICAgIGlkOiAnZW1wbG95ZXItdGl0bGUnLFxuICAvLyAgICAgICAgIGxhYmVsVGV4dDogJ1RpdGxlIG9mIEVtcGxveWVyIG9yIEF1dGhvcml6ZWQgUmVwcmVzZW50YXRpdmUnLFxuICAvLyAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyVGl0bGUsXG4gIC8vICAgICAgICAgb2JqOiBpOUZvcm0sXG4gIC8vICAgICAgICAga2V5OiAnZW1wbG95ZXJUaXRsZSdcbiAgLy8gICAgICAgfSksXG4gIC8vICAgICAgIG1ha2VUZXh0SW5wdXQoe1xuICAvLyAgICAgICAgIGlkOiAnZW1wbG95ZXItbGFzdC1uYW1lJyxcbiAgLy8gICAgICAgICBsYWJlbFRleHQ6ICdFbXBsb3llciBMYXN0IE5hbWUnLFxuICAvLyAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyTGFzdE5hbWUsXG4gIC8vICAgICAgICAgb2JqOiBpOUZvcm0sXG4gIC8vICAgICAgICAga2V5OiAnZW1wbG95ZXJMYXN0TmFtZSdcbiAgLy8gICAgICAgfSksXG4gIC8vICAgICAgIG1ha2VUZXh0SW5wdXQoe1xuICAvLyAgICAgICAgIGlkOiAnZW1wbG95ZXItZmlyc3QtbmFtZScsXG4gIC8vICAgICAgICAgbGFiZWxUZXh0OiAnRW1wbG95ZXIgRmlyc3QgTmFtZScsXG4gIC8vICAgICAgICAgaW5pdGlhbFZhbHVlOiBpOUZvcm0uZW1wbG95ZXJGaXJzdE5hbWUsXG4gIC8vICAgICAgICAgb2JqOiBpOUZvcm0sXG4gIC8vICAgICAgICAga2V5OiAnZW1wbG95ZXJGaXJzdE5hbWUnXG4gIC8vICAgICAgIH0pLFxuICAvLyAgICAgICBtYWtlVGV4dElucHV0KHtcbiAgLy8gICAgICAgICBpZDogJ2VtcGxveWVyLWJ1c2luZXNzLW5hbWUnLFxuICAvLyAgICAgICAgIGxhYmVsVGV4dDogYEVtcGxveWVyJ3MgQnVzaW5lc3Mgb3IgT3JnYW5pemF0aW9uIE5hbWVgLFxuICAvLyAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyTmFtZSxcbiAgLy8gICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgLy8gICAgICAgICBrZXk6ICdlbXBsb3llck5hbWUnXG4gIC8vICAgICAgIH0pLFxuICAvLyAgICAgICBtYWtlVGV4dElucHV0KHtcbiAgLy8gICAgICAgICBpZDogJ2VtcGxveWVyLWFkZHJlc3MnLFxuICAvLyAgICAgICAgIGxhYmVsVGV4dDogYEVtcGxveWVyJ3MgQnVzaW5lc3Mgb3IgT3JnYW5pemF0aW9uIEFkZHJlc3MgKFN0cmVldCBOdW1iZXIgYW5kIE5hbWUpYCxcbiAgLy8gICAgICAgICBpbml0aWFsVmFsdWU6IGk5Rm9ybS5lbXBsb3llckFkZHJlc3MsXG4gIC8vICAgICAgICAgb2JqOiBpOUZvcm0sXG4gIC8vICAgICAgICAga2V5OiAnZW1wbG95ZXJBZGRyZXNzJ1xuICAvLyAgICAgICB9KSxcbiAgLy8gICAgICAgbWFrZVRleHRJbnB1dCh7XG4gIC8vICAgICAgICAgaWQ6ICdlbXBsb3llci1jaXR5JyxcbiAgLy8gICAgICAgICBsYWJlbFRleHQ6ICdDaXR5IG9yIFRvd24nLFxuICAvLyAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyQ2l0eSxcbiAgLy8gICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgLy8gICAgICAgICBrZXk6ICdlbXBsb3llckNpdHknXG4gIC8vICAgICAgIH0pLFxuICAvLyAgICAgICBtYWtlVGV4dElucHV0KHtcbiAgLy8gICAgICAgICBpZDogJ2VtcGxveWVyLXN0YXRlJyxcbiAgLy8gICAgICAgICBsYWJlbFRleHQ6ICdTdGF0ZScsXG4gIC8vICAgICAgICAgaW5pdGlhbFZhbHVlOiBpOUZvcm0uZW1wbG95ZXJTdGF0ZSxcbiAgLy8gICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgLy8gICAgICAgICBrZXk6ICdlbXBsb3llclN0YXRlJ1xuICAvLyAgICAgICB9KSxcbiAgLy8gICAgICAgbWFrZVRleHRJbnB1dCh7XG4gIC8vICAgICAgICAgaWQ6ICdlbXBsb3llci16aXAtY29kZScsXG4gIC8vICAgICAgICAgbGFiZWxUZXh0OiAnWklQIENvZGUnLFxuICAvLyAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyWmlwQ29kZSxcbiAgLy8gICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgLy8gICAgICAgICBrZXk6ICdlbXBsb3llclppcENvZGUnXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICApKVxuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgLy8gY29uc3QgU3VibWl0QnV0dG9uID0gKGk5Rm9ybSkgPT4gKHtcbiAgLy8gICB2aWV3KCkge1xuICAvLyAgICAgY29uc3Qgc3VibWl0U2VjdGlvbjIgPSAoZXZlbnQpID0+IHtcbiAgLy8gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgICAgLy8gbS5yZXF1ZXN0KHtcbiAgLy8gICAgICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgICAgLy8gICB1cmw6IGAvaTlgLFxuICAvLyAgICAgICAvLyAgIGRhdGE6IGk5Rm9ybVxuICAvLyAgICAgICAvLyB9KS50aGVuKChyZXNCb2R5KSA9PiB7XG4gIC8vICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzQm9keSk7XG4gIC8vICAgICAgIC8vIH0pXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGBTb21lZGF5IHdlJ3JlIGdvaW5nIHRvIHN1Ym1pdCB0aGUgZm9sbG93aW5nIGRhdGE6YCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGk5Rm9ybSk7XG4gIC8vICAgICB9O1xuXG4gIC8vICAgICByZXR1cm4gKFxuICAvLyAgICAgICBtKCdkaXYnLFxuICAvLyAgICAgICAgIG0oJ2lucHV0Jywge1xuICAvLyAgICAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXG4gIC8vICAgICAgICAgICBjbGFzczogJ2IgcGgzIHB2MiBpbnB1dC1yZXNldCBiYSBiLS1ibGFjayBiZy10cmFuc3BhcmVudCBncm93IHBvaW50ZXIgZjYgZGliJyxcbiAgLy8gICAgICAgICAgIHZhbHVlOiAnU3VibWl0IFNlY3Rpb24gMicsXG4gIC8vICAgICAgICAgICBvbmNsaWNrOiBzdWJtaXRTZWN0aW9uMlxuICAvLyAgICAgICAgIH0pKSk7XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICBjb25zdCBvbkZvcm1DaGFuZ2UgPSAoaTlGb3JtRGF0YSkgPT4gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ICA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHByb3AgPSBpOUZvcm1EYXRhW2V2ZW50LnRhcmdldC5uYW1lXTtcblxuICAgIGNvbnNvbGUubG9nKGtleSk7XG5cbiAgICBpOUZvcm1EYXRhW2tleV0gPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAvLyBUT0RPOiByZWZhY3RvciB0aGlzIGJlaGF2aW9yIHVzaW5nIHByb3hpZXMgb3Igc29tZXRoaW5nXG4gICAgaWYgKGtleSA9PT0gJ2NpdGl6ZW5zaGlwU3RhdHVzQ29kZScpIHtcbiAgICAgIGk5Rm9ybURhdGEuZG9jdW1lbnRUeXBlSWQgICAgICA9IC0xO1xuICAgICAgaTlGb3JtRGF0YS5saXN0QkRvY3VtZW50VHlwZUlkID0gLTE7XG4gICAgICBpOUZvcm1EYXRhLmxpc3RDRG9jdW1lbnRUeXBlSWQgPSAtMTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnZG9jdW1lbnRUeXBlSWQnKSB7XG4gICAgICBpOUZvcm1EYXRhLmxpc3RCRG9jdW1lbnRUeXBlSWQgPSAtMTtcbiAgICAgIGk5Rm9ybURhdGEubGlzdENEb2N1bWVudFR5cGVJZCA9IC0xO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBJOUZvcm1EZWZhdWx0cyA9IHtcbiAgICBkb2N1bWVudFR5cGVJZDogICAgICAgICAtMSxcbiAgICBsaXN0QkRvY3VtZW50VHlwZUlkOiAgICAtMSxcbiAgICBsaXN0Q0RvY3VtZW50VHlwZUlkOiAgICAtMSxcbiAgICBsYXN0TmFtZTogICAgICAgICAgICAgICAnJyxcbiAgICBmaXJzdE5hbWU6ICAgICAgICAgICAgICAnJyxcbiAgICBtaWRkbGVJbml0aWFsOiAgICAgICAgICAnJyxcbiAgICBjaXRpemVuc2hpcFN0YXR1c0NvZGU6ICAtMSxcbiAgICBwYXNzcG9ydE51bWJlcjogICAgICAgICAnJyxcbiAgICBkb2N1bWVudEV4cGlyYXRpb25EYXRlOiAnJyxcbiAgICBoaXJlRGF0ZTogICAgICAgICAgICAgICAnJyxcbiAgICB0b2RheXNEYXRlOiAgICAgICAgICAgICAnJyxcbiAgICBzdWJtaXR0aW5nT2ZmaWNpYWxOYW1lOiAnJyxcbiAgICBlbXBsb3llclRpdGxlOiAgICAgICAgICAnJyxcbiAgICBlbXBsb3llckxhc3ROYW1lOiAgICAgICAnJyxcbiAgICBlbXBsb3llckZpcnN0TmFtZTogICAgICAnJyxcbiAgICBlbXBsb3llck5hbWU6ICAgICAgICAgICAnJyxcbiAgICBlbXBsb3llckFkZHJlc3M6ICAgICAgICAnJyxcbiAgICBlbXBsb3llckNpdHk6ICAgICAgICAgICAnJyxcbiAgICBlbXBsb3llclN0YXRlOiAgICAgICAgICAnJyxcbiAgICBlbXBsb3llclppcENvZGU6ICAgICAgICAnJ1xuICB9O1xuXG4gIGNvbnN0IEk5Rm9ybSA9IHtcbiAgICB2aWV3KHZub2RlKSB7XG4gICAgICBjb25zdCBkb2N1bWVudFR5cGVJZCA9IE51bWJlcih2bm9kZS5hdHRycy5kb2N1bWVudFR5cGVJZCk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIG0oJ2Zvcm0nLCB7IG9uY2hhbmdlOiBvbkZvcm1DaGFuZ2Uodm5vZGUuYXR0cnMpIH0sIFtcbiAgICAgICAgICBtKFNlY3Rpb24xSW5mbywgdm5vZGUuYXR0cnMpLFxuICAgICAgICAgIG0oRG9jdW1lbnRTZWxlY3QsIHZub2RlLmF0dHJzKSxcblxuICAgICAgICAgIGRvY3VtZW50VHlwZUlkID09PSBMaXN0QkNEb2N1bWVudFR5cGVJZFxuICAgICAgICAgID8gbShMaXN0QkFuZENEb2N1bWVudEluZm8sIHZub2RlLmF0dHJzKVxuICAgICAgICAgIDogbShMaXN0QURvY3VtZW50SW5mbywgdm5vZGUuYXR0cnMpXG4gICAgICAgIF0pKTtcbiAgICB9XG4gIH07XG5cbiAgY2xhc3MgSTlTZWN0aW9uMiB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbERhdGEgPSB7fSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IHtcbiAgICAgICAgLi4uSTlGb3JtRGVmYXVsdHMsXG4gICAgICAgIC4uLmluaXRpYWxEYXRhXG4gICAgICB9O1xuICAgIH1cblxuICAgIG1vdW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5mb3JtRGF0YTtcbiAgICAgIG0ubW91bnQoZWxlbWVudCwge1xuICAgICAgICB2aWV3KCkge1xuICAgICAgICAgIHJldHVybiBtKEk5Rm9ybSwgZm9ybURhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBJOVNlY3Rpb24yO1xuXG59KSgpOyJdfQ==