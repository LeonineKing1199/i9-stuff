;(function() {


  const Section1Info = (i9Form) => ({
    view() {
      return m('div', { class: 'measure' }, [
        m('h4', 'Employee Info from Section I'),

        // last name
        m('label', { for: 'last-name', class: 'f6 b db mb2' }, 'Last Name'),
        m('input', {
          onchange: m.withAttr('value', (lastName) => { i9Form.lastName = lastName; }),
          id: 'last-name',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          value: i9Form.lastName
        }, i9Form.lastName),

        // first name
        m('label', { for: 'first-name', class: 'f6 b db mb2' }, 'First Name'),
        m('input', {
          onchange: m.withAttr('value', (firstName) => { i9Form.firstName = firstName }),
          id: 'first-name',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          value: i9Form.firstName
        }, i9Form.firstName),

        // middle initial
        m('label', { for: 'middle-initial', class: 'f6 b db mb2' }, 'M.I.'),
        m('input', {
          onchange: m.withAttr('value', (mi) => { i9Form.middleInitial = mi; }),
          id: 'middle-initial',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          maxlength: '1'
        }, i9Form.middleInitial),

        // citizenship/immigration status
        m('label', { for: 'citizenship-status' }, 'Citizenship / Immigration Status'),
        m('select', {
          id: 'citizenship-status',
          onchange: m.withAttr('value', (status) => { i9Form.citizenshipStatusCode = Number(status); })
        }, [
          m('option', { value: -1, disabled: true, selected: true }, 'Select the corresponding status'),
          m('option', { value: 4 }, 'Citizen of the United States'),
          m('option', { value: 5 }, 'National of the United States'),
          m('option', { value: 6 }, 'Lawful Permanent Resident'),
          m('option', { value: 7 }, 'Alien Authorized to Work')
        ])
      ]);
    }
  });

  const USPassportForm = (i9Form) => ({
    view() {
      return m('div', { class: 'measure' }, [
        m('label', { for: 'passport-number', class: 'f6 b db mb2' }, 'Passport Number'),
        m('input', {
          onchange: m.withAttr('value', (num) => { i9Form.passportNumber = num; }),
          id: 'passport-number',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'text',
          value: i9Form.passportNumber
        }, i9Form.passportNumber),

        m('label', { for: 'passport-expiration-date', class: 'f6 b db mb2' }, 'Expiration Date'),
        m('input', {
          onchange: m.withAttr('value', (value) => { i9Form.documentExpirationDate = value; }),
          id: 'passport-expiration-date',
          class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
          type: 'date'
        })
      ]);
    }
  });

  const DocumentSelect = (i9Form) => ({
    view() {
      const docTypesMap = {
        'A_0': 29,
      };

      const helpNodes = {
        'A_2': m('div', { style: 'display:none;' }, 'Must contain a temporary I-551 stamp or temporary I-551 printed notation on a machine-readable immigrant visa'),
        'A_4': m('div', { style: 'display:none;' }, [
          m('div', 'Form I-94 or I-94A must have:'),
          m('ol', [
            m('li', 'The same name as the passport; and'),
            m('li', `An endorsement of the alien's nonimmigrant status as long as that period of endorsement has not yet expired and the proposed employment is not in conflict with any restrictions or limitations identified on the form.`)
          ])
        ]),
        'A_5': m('div', { style: 'display:none;' }, `Must be presented with Form I-94 or Form I-94A indicating nonimmigrant admission under the Compact of Free Association Between the United States and the FSM or RMI`)
      };

      const docInfoContainer = m('div', { id: 'doc-info-container' })

      const onchange = (selectedDoc) => {
        // styling stuff (makes help nodes visible for the relevant select choices)
        Object.values(helpNodes).forEach((helpNode) => { helpNode.dom.style.display = 'none'; });

        const helpNode = helpNodes[selectedDoc];

        if (helpNode) {
          helpNode.dom.style.display = '';
        }

        const docType = docTypesMap[selectedDoc];
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

      return (
        m('div', { class: 'measure' }, [
          m('h4', 'Identity and Employment Authorization'),
          m('p', 'The employee presented me with:'),
          m('select', { onchange: m.withAttr('value', onchange) }, [
            m('option', { selected: true, disabled: true }, 'Please select a document'),
            m('optgroup', { label: 'List A Documents' }, [
              m('option', { value: 'A_0' }, 'U.S. Passport or U.S. Passport Card'),
              m('option', { value: 'A_1' }, 'Permanent Resident Card or Alien Registration Receipt Card (Form I-551)'),
              m('option', { value: 'A_2' }, 'Foreign passport'),
              m('option', { value: 'A_3' }, 'Employment Authorization Document that contains a photograph (Form I-766)'),
              m('option', { value: 'A_4' }, 'Foreign passport and Form I-94 or Form I-94A'),
              m('option', { value: 'A_5' }, 'Passport from the Federated States of Micronesia (FSM) or the Republic of the Marshall Islands (RMI)')
            ])
          ]),
          m('div', Object.values(helpNodes)),
          docInfoContainer
        ])
      );
    }
  });



  const Certification = (i9Form) => ({
    view() {
      return m('div', [
        m('p', [
          m('strong', 'Certification:'),
          ' I attest, under penalty of perjury, that (1) I have examined the document(s) presented by the above-named employee, (2) the above-listed document(s) appear to be genuine and to relate to the employee named, and (3) to the best of my knowledge the employee is authorized to work in the United States.'
        ]),
        m('p', [
          m('strong', `The employee's first day of employment: `),
          m('span',
            m('input', {
              type: 'date',
              value: i9Form.hireDate,
              onchange: m.withAttr('value', (date) => { i9Form.hireDate = date; })
            }))
        ])
      ]);
    }
  });

  const makeTextInput = () => {};

  // This needs a better name but this is the section of section 2 that collects things like
  // today's date,
  const Misc = (i9Form) => ({
    view() {
      return m('div', { class: 'measure' }, [
        m('h4', 'Employer Info'),

        m('label', { for: 'todays-date' }, `Today's Date:`),
        m('input', {
          onchange: (date) => { i9Form.todaysDate = date; },
          id: 'todays-date',
          value: i9Form.todaysDate,
          type: 'date'
        })
      ])
    }
  });

  const I9Form = {
    documentTypeId:         -1,
    lastName:               '',
    firstName:              '',
    middleInitial:          '',
    citizenshipStatusCode:  -1,
    passportNumber:         '',
    documentExpirationDate: '',
    hireDate:               '',
    todaysDate:             '',
    submittingOfficialName: '',


    view() {
      return m('form', [
        m(Section1Info(this)),
        m(DocumentSelect(this)),
        m(Certification(this)),
        m(Misc(this))
      ]);
    }
  };

  window.mountI9Section2 =
    (element, attrs) => m.render(element, m({ view() { return m(I9Form, attrs); } }));
})();