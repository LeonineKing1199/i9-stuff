'use strict';

;(function () {

  var Section1Info = function Section1Info(i9Form) {
    return {
      view: function view() {
        return m('div', { class: 'measure' }, [m('h2', 'Employee Info from Section I'),

        // last name
        m('label', { for: 'last-name', class: 'f6 b db mb2' }, 'Last Name'), m('input', {
          onchange: m.withAttr('value', function (lastName) {
            i9Form.lastName = lastName;
          }),
          id: 'last-name',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          value: i9Form.lastName
        }, i9Form.lastName),

        // first name
        m('label', { for: 'first-name', class: 'f6 b db mb2' }, 'First Name'), m('input', {
          onchange: m.withAttr('value', function (firstName) {
            i9Form.firstName = firstName;
          }),
          id: 'first-name',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          value: i9Form.firstName
        }, i9Form.firstName),

        // middle initial
        m('label', { for: 'middle-initial', class: 'f6 b db mb2' }, 'M.I.'), m('input', {
          onchange: m.withAttr('value', function (mi) {
            i9Form.middleInitial = mi;
          }),
          id: 'middle-initial',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          maxlength: '1'
        }, i9Form.middleInitial),

        // citizenship/immigration status
        m('label', { for: 'citizenship-status' }, 'Citizenship / Immigration Status'), m('select', {
          id: 'citizenship-status',
          onchange: m.withAttr('value', function (status) {
            i9Form.citizenshipStatusCode = Number(status);
          })
        }, [m('option', { value: -1, disabled: true, selected: true }, 'Select the corresponding status'), m('option', { value: 4 }, 'Citizen of the United States'), m('option', { value: 5 }, 'National of the United States'), m('option', { value: 6 }, 'Lawful Permanent Resident'), m('option', { value: 7 }, 'Alien Authorized to Work')])]);
      }
    };
  };

  var USPassportForm = function USPassportForm(i9Form) {
    return {
      view: function view() {
        return m('div', { class: 'measure' }, [m('label', { for: 'passport-number', class: 'f6 b db mb2' }, 'Passport Number'), m('input', {
          onchange: m.withAttr('value', function (num) {
            i9Form.passportNumber = num;
          }),
          id: 'passport-number',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          value: i9Form.passportNumber
        }, i9Form.passportNumber), m('label', { for: 'passport-expiration-date', class: 'f6 b db mb2' }, 'Expiration Date'), m('input', {
          onchange: m.withAttr('value', function (value) {
            i9Form.documentExpirationDate = value;
          }),
          id: 'passport-expiration-date',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'date'
        })]);
      }
    };
  };

  var DocumentSelect = function DocumentSelect(i9Form) {
    return {
      view: function view() {
        var docTypesMap = {
          'A_0': 29
        };

        var helpNodes = {
          'A_2': m('div', { style: 'display:none;' }, 'Must contain a temporary I-551 stamp or temporary I-551 printed notation on a machine-readable immigrant visa'),
          'A_4': m('div', { style: 'display:none;' }, [m('div', 'Form I-94 or I-94A must have:'), m('ol', [m('li', 'The same name as the passport; and'), m('li', 'An endorsement of the alien\'s nonimmigrant status as long as that period of endorsement has not yet expired and the proposed employment is not in conflict with any restrictions or limitations identified on the form.')])]),
          'A_5': m('div', { style: 'display:none;' }, 'Must be presented with Form I-94 or Form I-94A indicating nonimmigrant admission under the Compact of Free Association Between the United States and the FSM or RMI')
        };

        var docInfoContainer = m('div', { id: 'doc-info-container' });

        var onchange = function onchange(selectedDoc) {
          // styling stuff (makes help nodes visible for the relevant select choices)
          Object.values(helpNodes).forEach(function (helpNode) {
            helpNode.dom.style.display = 'none';
          });

          var helpNode = helpNodes[selectedDoc];

          if (helpNode) {
            helpNode.dom.style.display = '';
          }

          var docType = docTypesMap[selectedDoc];
          if (docType) {
            i9Form.documentTypeId = docType;
          }

          if (selectedDoc === 'A_0') {
            m.render(docInfoContainer.dom, m(USPassportForm(i9Form)));
          } else {
            i9Form.passportNumber = '';
            m.render(docInfoContainer.dom, null);
          }
        };

        return m('div', { class: 'measure' }, [m('h2', 'Identity and Employment Authorization'), m('p', 'The employee presented me with:'), m('select', { onchange: m.withAttr('value', onchange) }, [m('option', { selected: true, disabled: true }, 'Please select a document'), m('optgroup', { label: 'List A Documents' }, [m('option', { value: 'A_0' }, 'U.S. Passport or U.S. Passport Card'), m('option', { value: 'A_1' }, 'Permanent Resident Card or Alien Registration Receipt Card (Form I-551)'), m('option', { value: 'A_2' }, 'Foreign passport'), m('option', { value: 'A_3' }, 'Employment Authorization Document that contains a photograph (Form I-766)'), m('option', { value: 'A_4' }, 'Foreign passport and Form I-94 or Form I-94A'), m('option', { value: 'A_5' }, 'Passport from the Federated States of Micronesia (FSM) or the Republic of the Marshall Islands (RMI)')])]), m('div', Object.values(helpNodes)), docInfoContainer]);
      }
    };
  };

  var Certification = function Certification(i9Form) {
    return {
      view: function view() {
        return m('div', [m('p', [m('strong', 'Certification:'), ' I attest, under penalty of perjury, that (1) I have examined the document(s) presented by the above-named employee, (2) the above-listed document(s) appear to be genuine and to relate to the employee named, and (3) to the best of my knowledge the employee is authorized to work in the United States.']), m('p', [m('strong', 'The employee\'s first day of employment: '), m('span', m('input', {
          type: 'date',
          value: i9Form.hireDate,
          onchange: m.withAttr('value', function (date) {
            i9Form.hireDate = date;
          })
        }))])]);
      }
    };
  };

  var makeTextInput = function makeTextInput(_ref) {
    var id = _ref.id,
        labelText = _ref.labelText,
        initialValue = _ref.initialValue,
        obj = _ref.obj,
        key = _ref.key;

    return [m('label', { for: id, class: 'f6 b db mb2' }, labelText), m('input', {
      onchange: m.withAttr('value', function (val) {
        obj[key] = val;
      }),
      id: id,
      value: initialValue,
      type: 'text',
      class: 'input-reset ba b--black-20 pa2 mb2 db w-100'
    })];
  };

  var EmployerInfo = function EmployerInfo(i9Form) {
    return {
      view: function view() {
        return m('div', { class: 'measure' }, [m('h2', 'Employer Info'), m('label', { for: 'todays-date' }, 'Today\'s Date:'), m('input', {
          onchange: m.withAttr('value', function (date) {
            i9Form.todaysDate = date;
          }),
          id: 'todays-date',
          value: i9Form.todaysDate,
          type: 'date'
        })].concat(makeTextInput({
          id: 'employer-title',
          labelText: 'Title of Employer or Authorized Representative',
          initialValue: i9Form.employerTitle,
          obj: i9Form,
          key: 'employerTitle'
        }), makeTextInput({
          id: 'employer-last-name',
          labelText: 'Employer Last Name',
          initialValue: i9Form.employerLastName,
          obj: i9Form,
          key: 'employerLastName'
        }), makeTextInput({
          id: 'employer-first-name',
          labelText: 'Employer First Name',
          initialValue: i9Form.employerFirstName,
          obj: i9Form,
          key: 'employerFirstName'
        }), makeTextInput({
          id: 'employer-business-name',
          labelText: 'Employer\'s Business or Organization Name',
          initialValue: i9Form.employerName,
          obj: i9Form,
          key: 'employerName'
        }), makeTextInput({
          id: 'employer-address',
          labelText: 'Employer\'s Business or Organization Address (Street Number and Name)',
          initialValue: i9Form.employerAddress,
          obj: i9Form,
          key: 'employerAddress'
        }), makeTextInput({
          id: 'employer-city',
          labelText: 'City or Town',
          initialValue: i9Form.employerCity,
          obj: i9Form,
          key: 'employerCity'
        }), makeTextInput({
          id: 'employer-state',
          labelText: 'State',
          initialValue: i9Form.employerState,
          obj: i9Form,
          key: 'employerState'
        }), makeTextInput({
          id: 'employer-zip-code',
          labelText: 'ZIP Code',
          initialValue: i9Form.employerZipCode,
          obj: i9Form,
          key: 'employerZipCode'
        })));
      }
    };
  };

  var SubmitButton = function SubmitButton(i9Form) {
    return {
      view: function view() {
        var submitSection2 = function submitSection2(event) {
          event.preventDefault();
          // m.request({
          //   method: 'POST',
          //   url: `/i9`,
          //   data: i9Form
          // }).then((resBody) => {
          //   console.log(resBody);
          // })
          console.log('Someday we\'re going to submit the following data:');
          console.log(i9Form);
        };

        return m('div', m('input', {
          type: 'submit',
          class: 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib',
          value: 'Submit Section 2',
          onclick: submitSection2
        }));
      }
    };
  };

  var I9Form = {
    documentTypeId: -1,
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
    employerZipCode: '',

    view: function view() {
      var _this = this;

      return m('form', [Section1Info, DocumentSelect, Certification, EmployerInfo, SubmitButton].map(function (component) {
        return m(component(_this));
      }));
    }
  };

  window.mountI9Section2 = function (element, attrs) {
    return m.render(element, m({
      view: function view() {
        return m(I9Form, attrs);
      }
    }));
  };
})();
