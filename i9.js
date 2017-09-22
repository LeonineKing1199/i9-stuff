'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

;window.I9Section2 = function () {

  var ListBCDocumentTypeId = 28;

  var ListADocumentData = [{
    documentTypeId: 13,
    citizenshipStatusCodes: [6],
    label: 'Permanent Resident Card (I-551)',
    inputs: [{
      label: 'Green Card Number',
      formField: 'cardNumber'
    }, {
      label: 'Alien Number / USCIS Number',
      formField: 'alienNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'permanentResidentCardIssuingAuthority'
    }]
  }, {
    documentTypeId: 17,
    citizenshipStatusCodes: [7],
    label: 'Employment Authorization Document (I-776)',
    inputs: [{
      label: 'Card Number',
      formField: 'cardNumber'
    }, {
      label: 'Alien Number / USCIS Number',
      formField: 'alienNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'i776IssuingAuthority'
    }, {
      label: 'Expiration Date (mm/dd/yyyy)',
      formField: 'documentExpirationDate'
    }]
  }, {
    documentTypeId: 24,
    citizenshipStatusCodes: [7],
    label: 'Foreign Passport with I-94/I-94A',
    inputs: [{
      label: 'Passport Number',
      formField: 'passportNumber'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'documentExpirationDate'
    }, {
      label: 'Country of Issuance Code',
      formField: 'countryOfIssuanceCode'
    }, {
      label: 'I-94 Number',
      formField: 'i94Number'
    }, {
      label: 'Visa Number (optional)',
      formField: 'visaNumber'
    }]
  }, {
    documentTypeId: 25,
    citizenshipStatusCodes: [6],
    label: 'Foreign Passport With I-551 Stamp or MRIV',
    inputs: [{
      label: 'Passport Number',
      formField: 'passportNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'i551StampIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'documentExpirationDate'
    }, {
      label: 'Alien Number',
      formField: 'alienNumber'
    }]
  }, {
    documentTypeId: 29,
    citizenshipStatusCodes: [4, 5],
    label: 'U.S. Passport or Passport Card',
    inputs: [{
      label: 'Passport Number',
      formField: 'passportNumber'
    }, {
      label: 'Expiration Date (mm/dd/yyyy)',
      formField: 'documentExpirationDate'
    }, {
      label: 'Issuing Authority',
      formField: 'usPassportIssuingAuthority'
    }]
  }];

  var ListBDocumentData = [{
    documentTypeId: 1,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'US Driver\'s License or ID card',
    inputs: [{
      label: 'License / ID Number',
      formField: 'listBCDocumentNumber'
    }, {
      label: 'Issuing State / US Authority',
      formField: 'issuingAuthorityCode'
    }, {
      label: 'Expiration Date (if any)',
      formField: 'documentExpirationDate'
    }]
  }, {
    documentTypeId: 2,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'ID Card Issued by a US Government Agency',
    inputs: [{
      label: 'ID Number',
      formField: 'idCardNumber'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'idCardExpirationDate'
    }, {
      label: 'Issuing Authority',
      formField: 'listBIdCardIssuingAuthority'
    }]
  }, {
    documentTypeId: 3,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'School ID Card',
    inputs: [{
      label: 'ID Number',
      formField: 'schoolIdCardNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'schoolIdIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'schoolIdCardExpirationDate'
    }]
  }, {
    documentTypeId: 4,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Voter Registration Card',
    inputs: [{
      label: 'VUID',
      formField: 'voterRegistrationCardIdNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'voterCardIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'voterRegistrationCardExpirationDate'
    }]
  }, {
    documentTypeId: 5,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'US Military Card or Draft Record',
    inputs: [{
      label: 'DoD Identification Number',
      formField: 'militaryCardIdNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'militaryCardIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'voterRegistrationCardExpirationDate'
    }]
  }, {
    documentTypeId: 6,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Military Dependent\'s ID Card',
    inputs: [{
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'voterRegistrationCardExpirationDate'
    }, {
      label: 'Issuing Authority',
      formField: 'militaryDependentIssuingAuthority'
    }]
  }, {
    documentTypeId: 7,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'US Coast Guard Merchant Mariner Card',
    inputs: [{
      label: 'Document Number',
      formField: 'merchantMarinerCardNumber'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'voterRegistrationCardExpirationDate'
    }]
  }, {
    documentTypeId: 8,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Native American Tribal Document',
    inputs: [{
      label: 'Issuing Authority',
      formField: 'tribalDocumentIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'tribalDocumentExpirationDate'
    }]
  }, {
    documentTypeId: 9,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Canadian Driver\'s License',
    inputs: [{
      label: 'License Number',
      formField: 'canadianDriversLicenseNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'canadianDriversLicenseIssuingAuthority'
    }, {
      label: 'Expiration Date (optional) (mm/dd/yyyy)',
      formField: 'canadianDriversLicenseExpirationDate'
    }]
  }, {
    documentTypeId: 10,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'School Record or Report Card (under age 18)',
    inputs: [{
      label: 'Issuing Authority (School / Institution Name)',
      formField: 'schoolIssuingAuthority'
    }]
  }, {
    documentTypeId: 11,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Clinic, Doctor or Hospital Record (under age 18)',
    inputs: [{
      label: 'Issuing Authority (Clinic, Doctor, Hospital)',
      formField: 'medicalRecordIssuingAuthority'
    }]
  }, {
    documentTypeId: 12,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Day-Care or Nursery School Record (under age 18)',
    inputs: [{
      label: 'Issuing Authority',
      formField: 'nurseryIssuingAuthority'
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
      formField: 'ssn'
    }, {
      label: 'Issuing Authority',
      formField: 'ssnIssuingAuthority'
    }]
  }, {
    documentTypeId: 14,
    citizenshipStatusCodes: [4, 5],
    label: 'Certification of Birth Abroad (Form FS-545)',
    inputs: [{
      label: 'Certificate Number',
      formField: 'fs545CertificateNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'fs545IssuingAuthority'
    }]
  }, {
    documentTypeId: 15,
    citizenshipStatusCodes: [4, 5],
    label: 'Certification of Report of Birth (DS-1350)',
    inputs: [{
      label: 'Certificate Number',
      formField: 'ds1350CertificateNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'ds1350IssuingAuthority'
    }]
  }, {
    documentTypeId: 16,
    citizenshipStatusCodes: [4, 5],
    label: 'US Birth Certificate (original or certified copy)',
    inputs: [{
      label: 'Certificate Number',
      formField: 'usBirthCertificateNumber'
    }, {
      label: 'Issuing Authority (State that issued certificate)',
      formField: 'birthCertificateIssuingAuthority'
    }]
  }, {
    documenTypeId: 17,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Native American Tribal Record',
    inputs: [{
      label: 'Document Number',
      formField: 'listCTribalDocumentNumber'
    }, {
      label: 'Issuing Authority (Issuing Tribe)',
      formField: 'listCTribalDocumentIssuingAuthority'
    }]
  }, {
    documentTypeId: 18,
    citizenshipStatusCodes: [4, 5],
    label: 'US Citizen ID Card (Form I-197)',
    inputs: [{
      label: 'Document Number',
      formField: 'i197CitizenDocumentNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'i197CitizenIssuingAuthority'
    }]
  }, {
    documentTypeId: 19,
    citizenshipStatusCodes: [4, 5],
    label: 'ID Card for Use of Resident Citizen in the US (I-179)',
    inputs: [{
      label: 'Document Number',
      formField: 'i179ResidentDocumentNumber'
    }, {
      label: 'Issuing Authority',
      formField: 'i179ResidentIssuingAuthority'
    }]
  }, {
    documentTypeId: 20,
    citizenshipStatusCodes: [4, 5, 6, 7],
    label: 'Employment authorization document issued by the DHS',
    inputs: [{
      label: 'Document Number',
      formField: 'dhsEmploymentAuthDocumentNumber'
    }]
  }];

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

  var Header = {
    view: function view(vnode) {
      return m('div', {
        class: 'ba bw1 bg-black-20 mv2'
      }, [m('strong', { class: 'f4' }, 'Section 2. Employer or Authorized Representative Review and Verification'), m('br'), m('span', m('em', '(Employers or their authorized representative must complete and sign Section 2 within 3 business days of the employee\'s first day of employment. You must physically examine one document from List A OR a combination of one document from List B and one document from List C as listed on the "Lists of Acceptable Documents.")'))]);
    }
  };

  var Section1Info = {
    view: function view(vnode) {
      var i9Form = vnode.attrs;
      var statusCode = Number(i9Form.citizenshipStatusCode);

      return m('div', { class: 'ba bw1 pa2' }, [m('strong', { class: 'f4 fl w-100 pb3' }, 'Employee Info from Section 1')].concat(_toConsumableArray(makeLabelInputPair({
        id: 'lastName',
        labelText: 'Last Name',
        initialValue: i9Form.lastName,
        opts: { disabled: true }
      })), _toConsumableArray(makeLabelInputPair({
        id: 'firstName',
        labelText: 'First Name',
        initialValue: i9Form.firstName,
        opts: { disabled: true }
      })), _toConsumableArray(makeLabelInputPair({
        id: 'middleInitial',
        labelText: 'M.I.',
        initialValue: i9Form.middleInitial,
        opts: {
          disabled: true,
          maxlength: 1
        }
      })), [

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
          formField = _ref4.formField;

      var labelInputVNodePair = makeLabelInputPair({
        id: formField,
        labelText: label,
        initialValue: vnode.attrs[formField] || ''
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
        return null;
      }

      return m('div', { class: 'measure' }, [m('div', [m('h2', 'List B Document Information', docDataToVNodes(listBDocumentTypeId, vnode, ListBDocumentData))]), m('div', [m('h2', 'List C Document Information', docDataToVNodes(listCDocumentTypeId, vnode, ListCDocumentData))])]);
    }
  };

  var AdditionalInformation = {
    view: function view(vnode) {
      var documentTypeId = Number(vnode.attrs.documentTypeId);
      var listBDocumentTypeId = Number(vnode.attrs.listBDocumentTypeId);
      var listCDocumentTypeId = Number(vnode.attrs.listCDocumentTypeId);

      if (documentTypeId === ListBCDocumentTypeId && (listBDocumentTypeId < 0 || listCDocumentTypeId < 0) || documentTypeId < 0) {
        return null;
      }

      return m('div', [m('h4', 'Additional Information (if any)'), m('textarea', { name: 'additionalInformation', rows: 4, cols: 50 }, vnode.attrs.additionalInformation || '')]);
    }
  };

  var Certification = {
    view: function view(vnode) {
      return m('div', [m('h2', 'Certification:'), m('p', ' I attest, under penalty of perjury, that (1) I have examined the document(s) presented by the above-named employee, (2) the above-listed document(s) appear to be genuine and to relate to the employee named, and (3) to the best of my knowledge the employee is authorized to work in the United States.'), m('p', [m('strong', 'The employee\'s first day of employment: '), m('span', m('input', {
        type: 'date',
        value: vnode.attrs.hireDate || '',
        name: 'hireDate'
      }))])]);
    }
  };

  var EmployerInfo = {
    view: function view(vnode) {
      var i9Form = vnode.attrs;
      return m('div', { class: 'measure' }, [m('h2', 'Employer Info'), m('label', { for: 'todays-date' }, 'Today\'s Date:'), m('input', {
        name: 'todaysDate',
        id: 'todays-date',
        value: i9Form.todaysDate,
        type: 'date'
      })].concat(makeLabelInputPair({
        id: 'employerTitle',
        labelText: 'Title of Employer or Authorized Representative',
        initialValue: i9Form.employerTitle
      }), makeLabelInputPair({
        id: 'employerLastName',
        labelText: 'Employer Last Name',
        initialValue: i9Form.employerLastName
      }), makeLabelInputPair({
        id: 'employerFirstName',
        labelText: 'Employer First Name',
        initialValue: i9Form.employerFirstName
      }), makeLabelInputPair({
        id: 'employerName',
        labelText: 'Employer\'s Business or Organization Name',
        initialValue: i9Form.employerName
      }), makeLabelInputPair({
        id: 'employerAddress',
        labelText: 'Employer\'s Business or Organization Address (Street Number and Name)',
        initialValue: i9Form.employerAddress
      }), makeLabelInputPair({
        id: 'employerCity',
        labelText: 'City or Town',
        initialValue: i9Form.employerCity
      }), makeLabelInputPair({
        id: 'employerState',
        labelText: 'State',
        initialValue: i9Form.employerState
      }), makeLabelInputPair({
        id: 'employerZipCode',
        labelText: 'ZIP Code',
        initialValue: i9Form.employerZipCode
      })));
    }
  };

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

      console.log(key);

      i9FormData[key] = event.target.value;

      // TODO: refactor this behavior using proxies or something
      if (key === 'citizenshipStatusCode') {
        i9FormData.documentTypeId = -1;
        i9FormData.listBDocumentTypeId = -1;
        i9FormData.listCDocumentTypeId = -1;
        i9FormData.additionalInformation = '';
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
      var i9Form = vnode.attrs;
      var documentTypeId = Number(i9Form.documentTypeId);
      return m('form', {
        autocomplete: 'off',
        onchange: onFormChange(i9Form)
      }, [m(Header), m(Section1Info, i9Form), m(DocumentSelect, i9Form), documentTypeId === ListBCDocumentTypeId ? m(ListBAndCDocumentInfo, i9Form) : m(ListADocumentInfo, i9Form), m(AdditionalInformation, i9Form), m(Certification, i9Form), m(EmployerInfo, i9Form)]);
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
        this.element = element;
        var formData = this.formData;
        m.mount(element, {
          view: function view() {
            return m(I9Form, formData);
          }
        });
      }
    }, {
      key: 'unmount',
      value: function unmount() {
        m.mount(this.element, null);
      }
    }]);

    return I9Section2;
  }();

  return I9Section2;
}();
