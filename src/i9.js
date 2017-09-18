; window.I9Section2 = (function() {


  const ListADocumentData = [
    {
      documentTypeId: 13,
      citizenshipStatusCodes: [6],
      label: 'Permanent Resident Card (I-551)',
      inputs: [
        {
          label: 'Green Card Number',
          sivField: 'cardNumber'
        },
        {
          label: 'Alien Number / USCIS Number',
          sivField: 'alienNumber'
        }
      ]
    },

    {
      documentTypeId: 17,
      citizenshipStatusCodes: [7],
      label: 'Employment Authorization Document (I-776)',
      inputs: [
        {
          label: 'Card Number',
          sivField: 'cardNumber'
        },
        {
          label: 'Alien Number / USCIS Number',
          sivField: 'alienNumber'
        },
        {
          label: 'Expiration Date (mm/dd/yyyy)',
          sivField: 'documentExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 24,
      citizenshipStatusCodes: [7],
      label: 'Foreign Passport with I-94/I-94A',
      inputs: [
        {
          label: 'Passport Number',
          sivField: 'passportNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'documentExpirationDate'
        },
        {
          label: 'Country of Issuance Code',
          sivField: 'countryOfIssuanceCode'
        },
        {
          label: 'I-94 Number',
          sivField: 'i94Number'
        },
        {
          label: 'Visa Number (optional)',
          sivField: 'visaNumber'
        }
      ]
    },

    {
      documentTypeId: 25,
      citizenshipStatusCodes: [6],
      label: 'Foreign Passport with Temporary I-551',
      inputs: [
        {
          label: 'Passport Number',
          sivField: 'passportNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'documentExpirationDate'
        },
        {
          label: 'Alien Number',
          sivField: 'alienNumber'
        }
      ]
    },

    {
      documentTypeId: 29,
      citizenshipStatusCodes: [4, 5],
      label: 'U.S. Passport or Passport Card',
      inputs: [
        {
          label: 'Passport Number',
          sivField: 'passportNumber'
        },
        {
          label: 'Expiration Date (mm/dd/yyyy)',
          sivField: 'documentExpirationDate'
        }
      ]
    }
  ];

  const makeTextInput = ({ id, labelText, initialValue , obj, key }) => {
    return [
      m('label', { for: id, class: 'f6 b db mb2' }, labelText),
      m('input', {
        onchange: m.withAttr('value', (val) => { obj[key] = val; }),
        name: id,
        id,
        value: initialValue,
        type: 'text',
        class: 'input-reset ba b--black-20 pa2 mb2 db w-100'
      })
    ]
  };

  const makeLabelInputPair  = ({ id, labelText, initialValue, opts = {} }) => {
    return [
      m('label', { for: id, class: 'f6 b db mb2' }, labelText),
      m('input', {
        name: id,
        id,
        value: initialValue,
        type: 'text',
        class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
        ...opts
      })
    ];
  };

  const Section1Info = {
    view(vnode) {
      const statusCode = Number(vnode.attrs.citizenshipStatusCode);

      return m('div', { class: 'measure' }, [
        m('h2', 'Employee Information from Section 1'),

        ...makeLabelInputPair({
          id: 'lastName',
          labelText: 'Last Name',
          initialValue: vnode.attrs.lastName,
          labelText: 'Last Name',
          opts: { disabled: true }
        }),

        ...makeLabelInputPair({
          id: 'firstName',
          labelText: 'First Name',
          initialValue: vnode.attrs.firstName,
          labelText: 'First Name',
          opts: { disabled: true }
        }),

        ...makeLabelInputPair({
          id: 'middleInitial',
          labelText: 'M.I.',
          initialValue: vnode.attrs.middleInitial,
          labelText: 'Middle Initial',
          opts: {
            disabled: true,
            maxlength: 1
          }
        }),

        // citizenship/immigration status
        m('label', { for: 'citizenship-status' }, 'Citizenship / Immigration Status'),
        m('select', { id: 'citizenship-status', name: 'citizenshipStatusCode' }, [
          m('option', { value: -1, disabled: true, selected: statusCode === -1  }, 'Select the corresponding status'),
          m('option', { value: 4, selected: statusCode === 4 }, 'Citizen of the United States'),
          m('option', { value: 5, selected: statusCode === 5 }, 'National of the United States'),
          m('option', { value: 6, selected: statusCode === 6 }, 'Lawful Permanent Resident'),
          m('option', { value: 7, selected: statusCode === 7 }, 'Alien Authorized to Work')
        ])
      ]);
    }
  };



  const DocumentInfo = {
    view(vnode) {
      const citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      const documentTypeId        = Number(vnode.attrs.documentTypeId);

      if (citizenshipStatusCode < 0) {
        return m('div', '');
      }

      const docSources = ListADocumentData;
      const vnodes     = [];

      const inputVNodes = docSources
        .filter((docData) => {
          return docData.citizenshipStatusCodes.includes(citizenshipStatusCode) && docData.documentTypeId === documentTypeId;
        })
        .reduce((vnodes, docData) => {
          const inputs = docData.inputs || [];
          return vnodes.concat(inputs.reduce(
            (vnodes, { label, sivField }) => vnodes.concat(makeLabelInputPair({
              id: sivField,
              labelText: label,
              initialValue: vnode.attrs[sivField] || ''
            })), []));
        }, vnodes);

      return m('div', { class: 'measure' }, inputVNodes || []);
    }
  };

  // const USPassportForm = (i9Form) => ({
  //   view() {
  //     return m('div', { class: 'measure' }, [
  //       m('label', { for: 'passport-number', class: 'f6 b db mb2' }, 'Passport Number'),
  //       m('input', {
  //         onchange: m.withAttr('value', (num) => { i9Form.passportNumber = num; }),
  //         id: 'passport-number',
  //         class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
  //         type: 'text',
  //         value: i9Form.passportNumber
  //       }, i9Form.passportNumber),

  //       m('label', { for: 'passport-expiration-date', class: 'f6 b db mb2' }, 'Expiration Date'),
  //       m('input', {
  //         onchange: m.withAttr('value', (value) => { i9Form.documentExpirationDate = value; }),
  //         id: 'passport-expiration-date',
  //         class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
  //         type: 'date'
  //       })
  //     ]);
  //   }
  // });

  const DocumentSelect = {
    view(vnode) {
      const citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      const documentTypeId        = Number(vnode.attrs.documentTypeId);

      if (citizenshipStatusCode < 0 || isNaN(citizenshipStatusCode)) {
        return (
          m('div', { class: 'measure' }, [
            m('h2', 'Identity and Employment Authorization'),
            m('p', 'Please select a citizenship status code first'),
          ]));
      }

      const listADocs = (
        ListADocumentData
          .filter((listADocData) => {
            return listADocData.citizenshipStatusCodes.includes(citizenshipStatusCode)
          })
          .map((listADocData) => {
            const attrs = {
              value: listADocData.documentTypeId,
              selected: listADocData.documentTypeId === documentTypeId
            };
            return m('option', attrs, listADocData.label);
          }));

      return (
        m('div', { class: 'measure' }, [
          m('h2', 'Identity and Employment Authorization'),
          m('p', 'The employee presented me with:'),

          m('select', { name: 'documentTypeId' }, [
            m('option', { selected: -1 === documentTypeId, disabled: true, value: -1 }, 'Please select a document'),
            m('optgroup', { label: 'List A Documents' }, listADocs)
          ])
        ]));
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

  const onFormChange = (i9FormData) => (event) => {
    const key = event.target.name;
    const prop = i9FormData[event.target.name];

    console.log(key);

    i9FormData[key] = event.target.value;

    if (key === 'citizenshipStatusCode') {
      i9FormData.documentTypeId = -1;
    }
  };

  const I9FormDefaults = {
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
    employerTitle:          '',
    employerLastName:       '',
    employerFirstName:      '',
    employerName:           '',
    employerAddress:        '',
    employerCity:           '',
    employerState:          '',
    employerZipCode:        ''
  };

  const I9Form = {
    view(vnode) {
      return (
        m('form', { onchange: onFormChange(vnode.attrs) }, [
          m(Section1Info, vnode.attrs),
          m(DocumentSelect, vnode.attrs),
          m(DocumentInfo, vnode.attrs)
        ]));
    }
  };

  class I9Section2 {
    constructor(initialData = {}) {
      this.formData = {
        ...I9FormDefaults,
        ...initialData
      };
    }

    mount(element) {
      const formData = this.formData;
      m.mount(element, {
        view() {
          return m(I9Form, formData);
        }
      });
    }

  }

  return I9Section2;

})();