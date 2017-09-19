; window.I9Section2 = (function() {

  const ListBCDocumentTypeId = 28;

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

  const ListBDocumentData = [
    {
      documentTypeId: 1,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: `US Driver's License or ID card`,
      inputs: [
        {
          label: 'License/ID Number',
          sivField: 'listBCDocumentNumber'
        },
        {
          label: 'Issuing State/ US Authority',
          sivField: 'issuingAuthorityCode'
        },
        {
          label: 'Expiration Date (if any)',
          sivField: 'documentExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 2,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'ID Card Issued by a US Government Agency',
      inputs: [
        {
          label: 'ID Number',
          sivField: 'idCardNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'idCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 3,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'School ID Card',
      inputs: [
        {
          label: 'ID Number',
          sivField: 'schoolIdCardNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'schoolIdCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 4,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Voter Registration Card',
      inputs: [
        {
          label: 'VUID',
          sivField: 'voterRegistrationCardIdNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'voterRegistrationCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 5,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'US Military Card or Draft Record',
      inputs: [
        {
          label: 'DoD Identification Number',
          sivField: 'militaryCardIdNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'voterRegistrationCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 6,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: `Military Dependent's ID Card`,
      inputs: [
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'voterRegistrationCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 7,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'US Coast Guard Merchant Mariner Card',
      inputs: [
        {
          label: 'Document Number',
          sivField: 'merchantMarinerCardNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'voterRegistrationCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 8,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Native American Tribal Document',
      inputs: []
    },

    {
      documentTypeId: 9,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: `Canadian Driver's License`,
      input: [
        {
          label: 'License Number',
          sivField: 'canadianDriversLicenseNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'canadianDriversLicenseExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 10,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'School Record or Report Card (under age 18)',
      input: []
    },

    {
      documentTypeId: 11,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Clinic, Doctor or Hospital Record (under age 18)',
      input: []
    },

    {
      documentTypeId: 12,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Day-Care or Nursery School Record (under age 18)',
      inputs: []
    },

    {
      documentTypeId: 21,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Minor Under Age 18 Without a List B Document',
      input: []
    },

    {
      documentTypeId: 22,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Special Placement',
      inputs: []
    }
  ];

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

  const generateDocumentSelectOptions = (citizenshipStatusCode = -1, currDocTypeId = -1, docData = []) => {
    return (
      docData
        .filter(({ citizenshipStatusCodes }) => citizenshipStatusCodes.includes(citizenshipStatusCode))
        .map(({ documentTypeId, label }) => {
          return m(
            'option',
            {
              value: documentTypeId,
              selected: documentTypeId === currDocTypeId
            },
            label);
        }));
  };

  const DocumentSelect = {
    view(vnode) {
      const citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      const documentTypeId         = Number(vnode.attrs.documentTypeId);

      if (citizenshipStatusCode < 0 || isNaN(citizenshipStatusCode)) {
        return (
          m('div', { class: 'measure' }, [
            m('h2', 'Identity and Employment Authorization'),
            m('p', 'Please select a citizenship status code first'),
          ]));
      }

      const listADocs = generateDocumentSelectOptions(citizenshipStatusCode, documentTypeId, ListADocumentData);

      return (
        m('div', { class: 'measure' }, [
          m('h2', 'Identity and Employment Authorization'),
          m('p', 'The employee presented me with:'),

          m('select', { name: 'documentTypeId' }, [
            m('option', { selected: -1 === documentTypeId, disabled: true, value: -1 }, 'Please select a document'),
            ...listADocs,
            m(
              'option',
              {
                selected: documentTypeId === ListBCDocumentTypeId,
                value: ListBCDocumentTypeId
              },
              'List B and C Documents')
          ]),

          documentTypeId === ListBCDocumentTypeId
          ? m(ListBAndCDocumentSelect, vnode.attrs)
          : null
        ]));
    }
  };

  const ListBAndCDocumentSelect = {
    view(vnode) {
      const documentTypeId = Number(vnode.attrs.documentTypeId);
      if (documentTypeId !== ListBCDocumentTypeId) {
        return null;
      }

      const citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      if (citizenshipStatusCode < 0) {
        return null;
      }

      const listBDocumentTypeId = Number(vnode.attrs.listBDocumentTypeId);
      const listBOptions = generateDocumentSelectOptions(citizenshipStatusCode, listBDocumentTypeId, ListBDocumentData);

      return m('div', { class: 'measure' },
        [
          m('select', { name: 'listBDocumentTypeId' },
          [
            m('option', { selected: -1 === listBDocumentTypeId, disabled: true, value: -1 }, 'Please select a document'),
            ...listBOptions
          ])
        ]);
    }
  };


  const docDataToVNodes = (documentTypeId = -1, vnode = {}, docDataSources = []) => {

    const documentData = docDataSources.find(
      (docData) => docData.documentTypeId === documentTypeId) || {};

    const inputs = documentData.inputs || [];
    const vnodes = inputs.reduce(
      (vnodes, { label, sivField }) => {
        const labelInputVNodePair = makeLabelInputPair({
          id: sivField,
          labelText: label,
          initialValue: vnode.attrs[sivField] || ''
        });
        return vnodes.concat(labelInputVNodePair);
      },
      []);

    return vnodes;
  };

  const ListADocumentInfo = {
    view(vnode) {
      const citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
      const documentTypeId        = Number(vnode.attrs.documentTypeId);

      if (citizenshipStatusCode < 0 || documentTypeId === ListBCDocumentTypeId || documentTypeId < 0) {
        return m('div', '');
      }

      return m(
        'div',
        { class: 'measure' },
        docDataToVNodes(documentTypeId, vnode, ListADocumentData));
    }
  };

  const ListBAndCDocumentInfo = {
      view(vnode) {
        const citizenshipStatusCode = Number(vnode.attrs.citizenshipStatusCode);
        const documentTypeId        = Number(vnode.attrs.documentTypeId);

        return m(
          'div',
          { class: 'measure' },
          []);
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
    const key  = event.target.name;
    const prop = i9FormData[event.target.name];

    console.log(key);

    i9FormData[key] = event.target.value;

    // TODO: refactor this behavior using proxies or something
    if (key === 'citizenshipStatusCode') {
      i9FormData.documentTypeId      = -1;
      i9FormData.listBDocumentTypeId = -1;
      i9FormData.listCDocumentTypeId = -1;
    }
  };

  const I9FormDefaults = {
    documentTypeId:         -1,
    listBDocumentTypeId:    -1,
    listCDocumentTypeId:    -1,
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
      const documentTypeId = Number(vnode.attrs.documentTypeId);

      return (
        m('form', { onchange: onFormChange(vnode.attrs) }, [
          m(Section1Info, vnode.attrs),
          m(DocumentSelect, vnode.attrs),

          documentTypeId === ListBCDocumentTypeId
          ? m(ListBAndCDocumentInfo, vnode.attrs)
          : m(ListADocumentInfo, vnode.attrs)
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