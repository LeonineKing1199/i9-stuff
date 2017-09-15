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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsTUFBRixFQUNMLENBQ0UsWUFERixFQUVFLGNBRkYsRUFHRSxhQUhGLEVBSUUsWUFKRixFQUtFLFlBTEYsRUFNRSxHQU5GLENBTU0sVUFBQyxTQUFEO0FBQUEsZUFBZSxFQUFFLGdCQUFGLENBQWY7QUFBQSxPQU5OLENBREssQ0FBUDtBQVNEO0FBOUJZLEdBQWY7O0FBaUNBLFNBQU8sZUFBUCxHQUNFLFVBQUMsT0FBRCxFQUFVLEtBQVY7QUFBQSxXQUFvQixFQUFFLE1BQUYsQ0FBUyxPQUFULEVBQWtCLEVBQUU7QUFBRSxVQUFGLGtCQUFTO0FBQUUsZUFBTyxFQUFFLE1BQUYsRUFBVSxLQUFWLENBQVA7QUFBMEI7QUFBckMsS0FBRixDQUFsQixDQUFwQjtBQUFBLEdBREY7QUFFRCxDQTFUQSIsImZpbGUiOiJpOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKSB7XG5cblxuICBjb25zdCBTZWN0aW9uMUluZm8gPSAoaTlGb3JtKSA9PiAoe1xuICAgIHZpZXcoKSB7XG4gICAgICByZXR1cm4gbSgnZGl2JywgeyBjbGFzczogJ21lYXN1cmUnIH0sIFtcbiAgICAgICAgbSgnaDInLCAnRW1wbG95ZWUgSW5mbyBmcm9tIFNlY3Rpb24gSScpLFxuXG4gICAgICAgIC8vIGxhc3QgbmFtZVxuICAgICAgICBtKCdsYWJlbCcsIHsgZm9yOiAnbGFzdC1uYW1lJywgY2xhc3M6ICdmNiBiIGRiIG1iMicgfSwgJ0xhc3QgTmFtZScpLFxuICAgICAgICBtKCdpbnB1dCcsIHtcbiAgICAgICAgICBvbmNoYW5nZTogbS53aXRoQXR0cigndmFsdWUnLCAobGFzdE5hbWUpID0+IHsgaTlGb3JtLmxhc3ROYW1lID0gbGFzdE5hbWU7IH0pLFxuICAgICAgICAgIGlkOiAnbGFzdC1uYW1lJyxcbiAgICAgICAgICBjbGFzczogJ2lucHV0LXJlc2V0IGJhIGItLWJsYWNrLTIwIHBhMiBtYjIgZGIgdy0xMDAnLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICB2YWx1ZTogaTlGb3JtLmxhc3ROYW1lXG4gICAgICAgIH0sIGk5Rm9ybS5sYXN0TmFtZSksXG5cbiAgICAgICAgLy8gZmlyc3QgbmFtZVxuICAgICAgICBtKCdsYWJlbCcsIHsgZm9yOiAnZmlyc3QtbmFtZScsIGNsYXNzOiAnZjYgYiBkYiBtYjInIH0sICdGaXJzdCBOYW1lJyksXG4gICAgICAgIG0oJ2lucHV0Jywge1xuICAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIChmaXJzdE5hbWUpID0+IHsgaTlGb3JtLmZpcnN0TmFtZSA9IGZpcnN0TmFtZSB9KSxcbiAgICAgICAgICBpZDogJ2ZpcnN0LW5hbWUnLFxuICAgICAgICAgIGNsYXNzOiAnaW5wdXQtcmVzZXQgYmEgYi0tYmxhY2stMjAgcGEyIG1iMiBkYiB3LTEwMCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHZhbHVlOiBpOUZvcm0uZmlyc3ROYW1lXG4gICAgICAgIH0sIGk5Rm9ybS5maXJzdE5hbWUpLFxuXG4gICAgICAgIC8vIG1pZGRsZSBpbml0aWFsXG4gICAgICAgIG0oJ2xhYmVsJywgeyBmb3I6ICdtaWRkbGUtaW5pdGlhbCcsIGNsYXNzOiAnZjYgYiBkYiBtYjInIH0sICdNLkkuJyksXG4gICAgICAgIG0oJ2lucHV0Jywge1xuICAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIChtaSkgPT4geyBpOUZvcm0ubWlkZGxlSW5pdGlhbCA9IG1pOyB9KSxcbiAgICAgICAgICBpZDogJ21pZGRsZS1pbml0aWFsJyxcbiAgICAgICAgICBjbGFzczogJ2lucHV0LXJlc2V0IGJhIGItLWJsYWNrLTIwIHBhMiBtYjIgZGIgdy0xMDAnLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBtYXhsZW5ndGg6ICcxJ1xuICAgICAgICB9LCBpOUZvcm0ubWlkZGxlSW5pdGlhbCksXG5cbiAgICAgICAgLy8gY2l0aXplbnNoaXAvaW1taWdyYXRpb24gc3RhdHVzXG4gICAgICAgIG0oJ2xhYmVsJywgeyBmb3I6ICdjaXRpemVuc2hpcC1zdGF0dXMnIH0sICdDaXRpemVuc2hpcCAvIEltbWlncmF0aW9uIFN0YXR1cycpLFxuICAgICAgICBtKCdzZWxlY3QnLCB7XG4gICAgICAgICAgaWQ6ICdjaXRpemVuc2hpcC1zdGF0dXMnLFxuICAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIChzdGF0dXMpID0+IHsgaTlGb3JtLmNpdGl6ZW5zaGlwU3RhdHVzQ29kZSA9IE51bWJlcihzdGF0dXMpOyB9KVxuICAgICAgICB9LCBbXG4gICAgICAgICAgbSgnb3B0aW9uJywgeyB2YWx1ZTogLTEsIGRpc2FibGVkOiB0cnVlLCBzZWxlY3RlZDogdHJ1ZSB9LCAnU2VsZWN0IHRoZSBjb3JyZXNwb25kaW5nIHN0YXR1cycpLFxuICAgICAgICAgIG0oJ29wdGlvbicsIHsgdmFsdWU6IDQgfSwgJ0NpdGl6ZW4gb2YgdGhlIFVuaXRlZCBTdGF0ZXMnKSxcbiAgICAgICAgICBtKCdvcHRpb24nLCB7IHZhbHVlOiA1IH0sICdOYXRpb25hbCBvZiB0aGUgVW5pdGVkIFN0YXRlcycpLFxuICAgICAgICAgIG0oJ29wdGlvbicsIHsgdmFsdWU6IDYgfSwgJ0xhd2Z1bCBQZXJtYW5lbnQgUmVzaWRlbnQnKSxcbiAgICAgICAgICBtKCdvcHRpb24nLCB7IHZhbHVlOiA3IH0sICdBbGllbiBBdXRob3JpemVkIHRvIFdvcmsnKVxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBVU1Bhc3Nwb3J0Rm9ybSA9IChpOUZvcm0pID0+ICh7XG4gICAgdmlldygpIHtcbiAgICAgIHJldHVybiBtKCdkaXYnLCB7IGNsYXNzOiAnbWVhc3VyZScgfSwgW1xuICAgICAgICBtKCdsYWJlbCcsIHsgZm9yOiAncGFzc3BvcnQtbnVtYmVyJywgY2xhc3M6ICdmNiBiIGRiIG1iMicgfSwgJ1Bhc3Nwb3J0IE51bWJlcicpLFxuICAgICAgICBtKCdpbnB1dCcsIHtcbiAgICAgICAgICBvbmNoYW5nZTogbS53aXRoQXR0cigndmFsdWUnLCAobnVtKSA9PiB7IGk5Rm9ybS5wYXNzcG9ydE51bWJlciA9IG51bTsgfSksXG4gICAgICAgICAgaWQ6ICdwYXNzcG9ydC1udW1iZXInLFxuICAgICAgICAgIGNsYXNzOiAnaW5wdXQtcmVzZXQgYmEgYi0tYmxhY2stMjAgcGEyIG1iMiBkYiB3LTEwMCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHZhbHVlOiBpOUZvcm0ucGFzc3BvcnROdW1iZXJcbiAgICAgICAgfSwgaTlGb3JtLnBhc3Nwb3J0TnVtYmVyKSxcblxuICAgICAgICBtKCdsYWJlbCcsIHsgZm9yOiAncGFzc3BvcnQtZXhwaXJhdGlvbi1kYXRlJywgY2xhc3M6ICdmNiBiIGRiIG1iMicgfSwgJ0V4cGlyYXRpb24gRGF0ZScpLFxuICAgICAgICBtKCdpbnB1dCcsIHtcbiAgICAgICAgICBvbmNoYW5nZTogbS53aXRoQXR0cigndmFsdWUnLCAodmFsdWUpID0+IHsgaTlGb3JtLmRvY3VtZW50RXhwaXJhdGlvbkRhdGUgPSB2YWx1ZTsgfSksXG4gICAgICAgICAgaWQ6ICdwYXNzcG9ydC1leHBpcmF0aW9uLWRhdGUnLFxuICAgICAgICAgIGNsYXNzOiAnaW5wdXQtcmVzZXQgYmEgYi0tYmxhY2stMjAgcGEyIG1iMiBkYiB3LTEwMCcsXG4gICAgICAgICAgdHlwZTogJ2RhdGUnXG4gICAgICAgIH0pXG4gICAgICBdKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IERvY3VtZW50U2VsZWN0ID0gKGk5Rm9ybSkgPT4gKHtcbiAgICB2aWV3KCkge1xuICAgICAgY29uc3QgZG9jVHlwZXNNYXAgPSB7XG4gICAgICAgICdBXzAnOiAyOSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhlbHBOb2RlcyA9IHtcbiAgICAgICAgJ0FfMic6IG0oJ2RpdicsIHsgc3R5bGU6ICdkaXNwbGF5Om5vbmU7JyB9LCAnTXVzdCBjb250YWluIGEgdGVtcG9yYXJ5IEktNTUxIHN0YW1wIG9yIHRlbXBvcmFyeSBJLTU1MSBwcmludGVkIG5vdGF0aW9uIG9uIGEgbWFjaGluZS1yZWFkYWJsZSBpbW1pZ3JhbnQgdmlzYScpLFxuICAgICAgICAnQV80JzogbSgnZGl2JywgeyBzdHlsZTogJ2Rpc3BsYXk6bm9uZTsnIH0sIFtcbiAgICAgICAgICBtKCdkaXYnLCAnRm9ybSBJLTk0IG9yIEktOTRBIG11c3QgaGF2ZTonKSxcbiAgICAgICAgICBtKCdvbCcsIFtcbiAgICAgICAgICAgIG0oJ2xpJywgJ1RoZSBzYW1lIG5hbWUgYXMgdGhlIHBhc3Nwb3J0OyBhbmQnKSxcbiAgICAgICAgICAgIG0oJ2xpJywgYEFuIGVuZG9yc2VtZW50IG9mIHRoZSBhbGllbidzIG5vbmltbWlncmFudCBzdGF0dXMgYXMgbG9uZyBhcyB0aGF0IHBlcmlvZCBvZiBlbmRvcnNlbWVudCBoYXMgbm90IHlldCBleHBpcmVkIGFuZCB0aGUgcHJvcG9zZWQgZW1wbG95bWVudCBpcyBub3QgaW4gY29uZmxpY3Qgd2l0aCBhbnkgcmVzdHJpY3Rpb25zIG9yIGxpbWl0YXRpb25zIGlkZW50aWZpZWQgb24gdGhlIGZvcm0uYClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgJ0FfNSc6IG0oJ2RpdicsIHsgc3R5bGU6ICdkaXNwbGF5Om5vbmU7JyB9LCBgTXVzdCBiZSBwcmVzZW50ZWQgd2l0aCBGb3JtIEktOTQgb3IgRm9ybSBJLTk0QSBpbmRpY2F0aW5nIG5vbmltbWlncmFudCBhZG1pc3Npb24gdW5kZXIgdGhlIENvbXBhY3Qgb2YgRnJlZSBBc3NvY2lhdGlvbiBCZXR3ZWVuIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgRlNNIG9yIFJNSWApXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkb2NJbmZvQ29udGFpbmVyID0gbSgnZGl2JywgeyBpZDogJ2RvYy1pbmZvLWNvbnRhaW5lcicgfSlcblxuICAgICAgY29uc3Qgb25jaGFuZ2UgPSAoc2VsZWN0ZWREb2MpID0+IHtcbiAgICAgICAgLy8gc3R5bGluZyBzdHVmZiAobWFrZXMgaGVscCBub2RlcyB2aXNpYmxlIGZvciB0aGUgcmVsZXZhbnQgc2VsZWN0IGNob2ljZXMpXG4gICAgICAgIE9iamVjdC52YWx1ZXMoaGVscE5vZGVzKS5mb3JFYWNoKChoZWxwTm9kZSkgPT4geyBoZWxwTm9kZS5kb20uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSk7XG5cbiAgICAgICAgY29uc3QgaGVscE5vZGUgPSBoZWxwTm9kZXNbc2VsZWN0ZWREb2NdO1xuXG4gICAgICAgIGlmIChoZWxwTm9kZSkge1xuICAgICAgICAgIGhlbHBOb2RlLmRvbS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2NUeXBlID0gZG9jVHlwZXNNYXBbc2VsZWN0ZWREb2NdO1xuICAgICAgICBpZiAoZG9jVHlwZSkge1xuICAgICAgICAgIGk5Rm9ybS5kb2N1bWVudFR5cGVJZCA9IGRvY1R5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWREb2MgPT09ICdBXzAnKSB7XG4gICAgICAgICAgbS5yZW5kZXIoZG9jSW5mb0NvbnRhaW5lci5kb20sIG0oVVNQYXNzcG9ydEZvcm0oaTlGb3JtKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGk5Rm9ybS5wYXNzcG9ydE51bWJlciA9ICcnO1xuICAgICAgICAgIG0ucmVuZGVyKGRvY0luZm9Db250YWluZXIuZG9tLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgbSgnZGl2JywgeyBjbGFzczogJ21lYXN1cmUnIH0sIFtcbiAgICAgICAgICBtKCdoMicsICdJZGVudGl0eSBhbmQgRW1wbG95bWVudCBBdXRob3JpemF0aW9uJyksXG4gICAgICAgICAgbSgncCcsICdUaGUgZW1wbG95ZWUgcHJlc2VudGVkIG1lIHdpdGg6JyksXG4gICAgICAgICAgbSgnc2VsZWN0JywgeyBvbmNoYW5nZTogbS53aXRoQXR0cigndmFsdWUnLCBvbmNoYW5nZSkgfSwgW1xuICAgICAgICAgICAgbSgnb3B0aW9uJywgeyBzZWxlY3RlZDogdHJ1ZSwgZGlzYWJsZWQ6IHRydWUgfSwgJ1BsZWFzZSBzZWxlY3QgYSBkb2N1bWVudCcpLFxuICAgICAgICAgICAgbSgnb3B0Z3JvdXAnLCB7IGxhYmVsOiAnTGlzdCBBIERvY3VtZW50cycgfSwgW1xuICAgICAgICAgICAgICBtKCdvcHRpb24nLCB7IHZhbHVlOiAnQV8wJyB9LCAnVS5TLiBQYXNzcG9ydCBvciBVLlMuIFBhc3Nwb3J0IENhcmQnKSxcbiAgICAgICAgICAgICAgbSgnb3B0aW9uJywgeyB2YWx1ZTogJ0FfMScgfSwgJ1Blcm1hbmVudCBSZXNpZGVudCBDYXJkIG9yIEFsaWVuIFJlZ2lzdHJhdGlvbiBSZWNlaXB0IENhcmQgKEZvcm0gSS01NTEpJyksXG4gICAgICAgICAgICAgIG0oJ29wdGlvbicsIHsgdmFsdWU6ICdBXzInIH0sICdGb3JlaWduIHBhc3Nwb3J0JyksXG4gICAgICAgICAgICAgIG0oJ29wdGlvbicsIHsgdmFsdWU6ICdBXzMnIH0sICdFbXBsb3ltZW50IEF1dGhvcml6YXRpb24gRG9jdW1lbnQgdGhhdCBjb250YWlucyBhIHBob3RvZ3JhcGggKEZvcm0gSS03NjYpJyksXG4gICAgICAgICAgICAgIG0oJ29wdGlvbicsIHsgdmFsdWU6ICdBXzQnIH0sICdGb3JlaWduIHBhc3Nwb3J0IGFuZCBGb3JtIEktOTQgb3IgRm9ybSBJLTk0QScpLFxuICAgICAgICAgICAgICBtKCdvcHRpb24nLCB7IHZhbHVlOiAnQV81JyB9LCAnUGFzc3BvcnQgZnJvbSB0aGUgRmVkZXJhdGVkIFN0YXRlcyBvZiBNaWNyb25lc2lhIChGU00pIG9yIHRoZSBSZXB1YmxpYyBvZiB0aGUgTWFyc2hhbGwgSXNsYW5kcyAoUk1JKScpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIG0oJ2RpdicsIE9iamVjdC52YWx1ZXMoaGVscE5vZGVzKSksXG4gICAgICAgICAgZG9jSW5mb0NvbnRhaW5lclxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG5cblxuICBjb25zdCBDZXJ0aWZpY2F0aW9uID0gKGk5Rm9ybSkgPT4gKHtcbiAgICB2aWV3KCkge1xuICAgICAgcmV0dXJuIG0oJ2RpdicsIFtcbiAgICAgICAgbSgncCcsIFtcbiAgICAgICAgICBtKCdzdHJvbmcnLCAnQ2VydGlmaWNhdGlvbjonKSxcbiAgICAgICAgICAnIEkgYXR0ZXN0LCB1bmRlciBwZW5hbHR5IG9mIHBlcmp1cnksIHRoYXQgKDEpIEkgaGF2ZSBleGFtaW5lZCB0aGUgZG9jdW1lbnQocykgcHJlc2VudGVkIGJ5IHRoZSBhYm92ZS1uYW1lZCBlbXBsb3llZSwgKDIpIHRoZSBhYm92ZS1saXN0ZWQgZG9jdW1lbnQocykgYXBwZWFyIHRvIGJlIGdlbnVpbmUgYW5kIHRvIHJlbGF0ZSB0byB0aGUgZW1wbG95ZWUgbmFtZWQsIGFuZCAoMykgdG8gdGhlIGJlc3Qgb2YgbXkga25vd2xlZGdlIHRoZSBlbXBsb3llZSBpcyBhdXRob3JpemVkIHRvIHdvcmsgaW4gdGhlIFVuaXRlZCBTdGF0ZXMuJ1xuICAgICAgICBdKSxcbiAgICAgICAgbSgncCcsIFtcbiAgICAgICAgICBtKCdzdHJvbmcnLCBgVGhlIGVtcGxveWVlJ3MgZmlyc3QgZGF5IG9mIGVtcGxveW1lbnQ6IGApLFxuICAgICAgICAgIG0oJ3NwYW4nLFxuICAgICAgICAgICAgbSgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IGk5Rm9ybS5oaXJlRGF0ZSxcbiAgICAgICAgICAgICAgb25jaGFuZ2U6IG0ud2l0aEF0dHIoJ3ZhbHVlJywgKGRhdGUpID0+IHsgaTlGb3JtLmhpcmVEYXRlID0gZGF0ZTsgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICBdKVxuICAgICAgXSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBtYWtlVGV4dElucHV0ID0gKHsgaWQsIGxhYmVsVGV4dCwgaW5pdGlhbFZhbHVlICwgb2JqLCBrZXkgfSkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICBtKCdsYWJlbCcsIHsgZm9yOiBpZCwgY2xhc3M6ICdmNiBiIGRiIG1iMicgfSwgbGFiZWxUZXh0KSxcbiAgICAgIG0oJ2lucHV0Jywge1xuICAgICAgICBvbmNoYW5nZTogbS53aXRoQXR0cigndmFsdWUnLCAodmFsKSA9PiB7IG9ialtrZXldID0gdmFsOyB9KSxcbiAgICAgICAgaWQsXG4gICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY2xhc3M6ICdpbnB1dC1yZXNldCBiYSBiLS1ibGFjay0yMCBwYTIgbWIyIGRiIHctMTAwJ1xuICAgICAgfSlcbiAgICBdXG4gIH07XG5cblxuXG5cbiAgY29uc3QgRW1wbG95ZXJJbmZvID0gKGk5Rm9ybSkgPT4gKHtcbiAgICB2aWV3KCkge1xuICAgICAgcmV0dXJuIG0oJ2RpdicsIHsgY2xhc3M6ICdtZWFzdXJlJyB9LCBbXG4gICAgICAgIG0oJ2gyJywgJ0VtcGxveWVyIEluZm8nKSxcblxuICAgICAgICBtKCdsYWJlbCcsIHsgZm9yOiAndG9kYXlzLWRhdGUnIH0sIGBUb2RheSdzIERhdGU6YCksXG4gICAgICAgIG0oJ2lucHV0Jywge1xuICAgICAgICAgIG9uY2hhbmdlOiBtLndpdGhBdHRyKCd2YWx1ZScsIChkYXRlKSA9PiB7IGk5Rm9ybS50b2RheXNEYXRlID0gZGF0ZTsgfSksXG4gICAgICAgICAgaWQ6ICd0b2RheXMtZGF0ZScsXG4gICAgICAgICAgdmFsdWU6IGk5Rm9ybS50b2RheXNEYXRlLFxuICAgICAgICAgIHR5cGU6ICdkYXRlJ1xuICAgICAgICB9KVxuICAgICAgXS5jb25jYXQoXG4gICAgICAgIG1ha2VUZXh0SW5wdXQoe1xuICAgICAgICAgIGlkOiAnZW1wbG95ZXItdGl0bGUnLFxuICAgICAgICAgIGxhYmVsVGV4dDogJ1RpdGxlIG9mIEVtcGxveWVyIG9yIEF1dGhvcml6ZWQgUmVwcmVzZW50YXRpdmUnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyVGl0bGUsXG4gICAgICAgICAgb2JqOiBpOUZvcm0sXG4gICAgICAgICAga2V5OiAnZW1wbG95ZXJUaXRsZSdcbiAgICAgICAgfSksXG4gICAgICAgIG1ha2VUZXh0SW5wdXQoe1xuICAgICAgICAgIGlkOiAnZW1wbG95ZXItbGFzdC1uYW1lJyxcbiAgICAgICAgICBsYWJlbFRleHQ6ICdFbXBsb3llciBMYXN0IE5hbWUnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyTGFzdE5hbWUsXG4gICAgICAgICAgb2JqOiBpOUZvcm0sXG4gICAgICAgICAga2V5OiAnZW1wbG95ZXJMYXN0TmFtZSdcbiAgICAgICAgfSksXG4gICAgICAgIG1ha2VUZXh0SW5wdXQoe1xuICAgICAgICAgIGlkOiAnZW1wbG95ZXItZmlyc3QtbmFtZScsXG4gICAgICAgICAgbGFiZWxUZXh0OiAnRW1wbG95ZXIgRmlyc3QgTmFtZScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBpOUZvcm0uZW1wbG95ZXJGaXJzdE5hbWUsXG4gICAgICAgICAgb2JqOiBpOUZvcm0sXG4gICAgICAgICAga2V5OiAnZW1wbG95ZXJGaXJzdE5hbWUnXG4gICAgICAgIH0pLFxuICAgICAgICBtYWtlVGV4dElucHV0KHtcbiAgICAgICAgICBpZDogJ2VtcGxveWVyLWJ1c2luZXNzLW5hbWUnLFxuICAgICAgICAgIGxhYmVsVGV4dDogYEVtcGxveWVyJ3MgQnVzaW5lc3Mgb3IgT3JnYW5pemF0aW9uIE5hbWVgLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyTmFtZSxcbiAgICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgICAgICAgICBrZXk6ICdlbXBsb3llck5hbWUnXG4gICAgICAgIH0pLFxuICAgICAgICBtYWtlVGV4dElucHV0KHtcbiAgICAgICAgICBpZDogJ2VtcGxveWVyLWFkZHJlc3MnLFxuICAgICAgICAgIGxhYmVsVGV4dDogYEVtcGxveWVyJ3MgQnVzaW5lc3Mgb3IgT3JnYW5pemF0aW9uIEFkZHJlc3MgKFN0cmVldCBOdW1iZXIgYW5kIE5hbWUpYCxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IGk5Rm9ybS5lbXBsb3llckFkZHJlc3MsXG4gICAgICAgICAgb2JqOiBpOUZvcm0sXG4gICAgICAgICAga2V5OiAnZW1wbG95ZXJBZGRyZXNzJ1xuICAgICAgICB9KSxcbiAgICAgICAgbWFrZVRleHRJbnB1dCh7XG4gICAgICAgICAgaWQ6ICdlbXBsb3llci1jaXR5JyxcbiAgICAgICAgICBsYWJlbFRleHQ6ICdDaXR5IG9yIFRvd24nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyQ2l0eSxcbiAgICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgICAgICAgICBrZXk6ICdlbXBsb3llckNpdHknXG4gICAgICAgIH0pLFxuICAgICAgICBtYWtlVGV4dElucHV0KHtcbiAgICAgICAgICBpZDogJ2VtcGxveWVyLXN0YXRlJyxcbiAgICAgICAgICBsYWJlbFRleHQ6ICdTdGF0ZScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBpOUZvcm0uZW1wbG95ZXJTdGF0ZSxcbiAgICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgICAgICAgICBrZXk6ICdlbXBsb3llclN0YXRlJ1xuICAgICAgICB9KSxcbiAgICAgICAgbWFrZVRleHRJbnB1dCh7XG4gICAgICAgICAgaWQ6ICdlbXBsb3llci16aXAtY29kZScsXG4gICAgICAgICAgbGFiZWxUZXh0OiAnWklQIENvZGUnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogaTlGb3JtLmVtcGxveWVyWmlwQ29kZSxcbiAgICAgICAgICBvYmo6IGk5Rm9ybSxcbiAgICAgICAgICBrZXk6ICdlbXBsb3llclppcENvZGUnXG4gICAgICAgIH0pXG4gICAgICApKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgU3VibWl0QnV0dG9uID0gKGk5Rm9ybSkgPT4gKHtcbiAgICB2aWV3KCkge1xuICAgICAgY29uc3Qgc3VibWl0U2VjdGlvbjIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gbS5yZXF1ZXN0KHtcbiAgICAgICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gICB1cmw6IGAvaTlgLFxuICAgICAgICAvLyAgIGRhdGE6IGk5Rm9ybVxuICAgICAgICAvLyB9KS50aGVuKChyZXNCb2R5KSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzQm9keSk7XG4gICAgICAgIC8vIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGBTb21lZGF5IHdlJ3JlIGdvaW5nIHRvIHN1Ym1pdCB0aGUgZm9sbG93aW5nIGRhdGE6YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGk5Rm9ybSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBtKCdkaXYnLFxuICAgICAgICAgIG0oJ2lucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXG4gICAgICAgICAgICBjbGFzczogJ2IgcGgzIHB2MiBpbnB1dC1yZXNldCBiYSBiLS1ibGFjayBiZy10cmFuc3BhcmVudCBncm93IHBvaW50ZXIgZjYgZGliJyxcbiAgICAgICAgICAgIHZhbHVlOiAnU3VibWl0IFNlY3Rpb24gMicsXG4gICAgICAgICAgICBvbmNsaWNrOiBzdWJtaXRTZWN0aW9uMlxuICAgICAgICAgIH0pKSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBJOUZvcm0gPSB7XG4gICAgZG9jdW1lbnRUeXBlSWQ6ICAgICAgICAgLTEsXG4gICAgbGFzdE5hbWU6ICAgICAgICAgICAgICAgJycsXG4gICAgZmlyc3ROYW1lOiAgICAgICAgICAgICAgJycsXG4gICAgbWlkZGxlSW5pdGlhbDogICAgICAgICAgJycsXG4gICAgY2l0aXplbnNoaXBTdGF0dXNDb2RlOiAgLTEsXG4gICAgcGFzc3BvcnROdW1iZXI6ICAgICAgICAgJycsXG4gICAgZG9jdW1lbnRFeHBpcmF0aW9uRGF0ZTogJycsXG4gICAgaGlyZURhdGU6ICAgICAgICAgICAgICAgJycsXG4gICAgdG9kYXlzRGF0ZTogICAgICAgICAgICAgJycsXG4gICAgc3VibWl0dGluZ09mZmljaWFsTmFtZTogJycsXG4gICAgZW1wbG95ZXJUaXRsZTogICAgICAgICAgJycsXG4gICAgZW1wbG95ZXJMYXN0TmFtZTogICAgICAgJycsXG4gICAgZW1wbG95ZXJGaXJzdE5hbWU6ICAgICAgJycsXG4gICAgZW1wbG95ZXJOYW1lOiAgICAgICAgICAgJycsXG4gICAgZW1wbG95ZXJBZGRyZXNzOiAgICAgICAgJycsXG4gICAgZW1wbG95ZXJDaXR5OiAgICAgICAgICAgJycsXG4gICAgZW1wbG95ZXJTdGF0ZTogICAgICAgICAgJycsXG4gICAgZW1wbG95ZXJaaXBDb2RlOiAgICAgICAgJycsXG5cbiAgICB2aWV3KCkge1xuICAgICAgcmV0dXJuIG0oJ2Zvcm0nLFxuICAgICAgICBbXG4gICAgICAgICAgU2VjdGlvbjFJbmZvLFxuICAgICAgICAgIERvY3VtZW50U2VsZWN0LFxuICAgICAgICAgIENlcnRpZmljYXRpb24sXG4gICAgICAgICAgRW1wbG95ZXJJbmZvLFxuICAgICAgICAgIFN1Ym1pdEJ1dHRvblxuICAgICAgICBdLm1hcCgoY29tcG9uZW50KSA9PiBtKGNvbXBvbmVudCh0aGlzKSkpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cubW91bnRJOVNlY3Rpb24yID1cbiAgICAoZWxlbWVudCwgYXR0cnMpID0+IG0ucmVuZGVyKGVsZW1lbnQsIG0oeyB2aWV3KCkgeyByZXR1cm4gbShJOUZvcm0sIGF0dHJzKTsgfSB9KSk7XG59KSgpOyJdfQ==