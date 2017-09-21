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
        },
        {
          label: 'Issuing Authority',
          sivField: 'permanentResidentCardIssuingAuthority'
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
          label: 'Issuing Authority',
          sivField: 'i776IssuingAuthority'
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
      label: 'Foreign Passport With I-551 Stamp or MRIV',
      inputs: [
        {
          label: 'Passport Number',
          sivField: 'passportNumber'
        },
        {
          label: 'Issuing Authority',
          sivField: 'i551StampIssuingAuthority'
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
        },
        {
          label: 'Issuing Authority',
          sivField: 'usPassportIssuingAuthority'
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
          label: 'License / ID Number',
          sivField: 'listBCDocumentNumber'
        },
        {
          label: 'Issuing State / US Authority',
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
        },
        {
          label: 'Issuing Authority',
          sivField: 'listBIdCardIssuingAuthority'
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
          label: 'Issuing Authority',
          sivField: 'schoolIdIssuingAuthority'
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
          label: 'Issuing Authority',
          sivField: 'voterCardIssuingAuthority'
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
          label: 'Issuing Authority',
          sivField: 'militaryCardIssuingAuthority'
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
        },
        {
          label: 'Issuing Authority',
          sivField: 'militaryDependentIssuingAuthority'
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
      inputs: [
        {
          label: 'Issuing Authority',
          sivField: 'tribalDocumentIssuingAuthority'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          sivField: 'tribalDocumentExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 9,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: `Canadian Driver's License`,
      inputs: [
        {
          label: 'License Number',
          sivField: 'canadianDriversLicenseNumber'
        },
        {
          label: 'Issuing Authority',
          sivField: 'canadianDriversLicenseIssuingAuthority'
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
      inputs: [
        {
          label: 'Issuing Authority (School / Institution Name)',
          sivField: 'schoolIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 11,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Clinic, Doctor or Hospital Record (under age 18)',
      inputs: [
        {
          label: 'Issuing Authority (Clinic, Doctor, Hospital)',
          sivField: 'medicalRecordIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 12,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Day-Care or Nursery School Record (under age 18)',
      inputs: [
        {
          label: 'Issuing Authority',
          sivField: 'nurseryIssuingAuthority'
        }
      ]
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

  const ListCDocumentData = [
    {
      documentTypeId: 13,
      citizenshipStatusCodes: [4, 5, 6 ,7],
      label: 'US Social Security Card',
      inputs: [
        {
          label: 'SSN',
          sivField: 'ssn'
        },
        {
          label: 'Issuing Authority',
          sivField: 'ssnIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 14,
      citizenshipStatusCodes: [4, 5],
      label: 'Certification of Birth Abroad (Form FS-545)',
      inputs: [
        {
          label: 'Certificate Number',
          sivField: 'fs545CertificateNumber'
        },
        {
          label: 'Issuing Authority',
          sivField: 'fs545IssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 15,
      citizenshipStatusCodes: [4, 5],
      label: 'Certification of Report of Birth (DS-1350)',
      inputs: [
        {
          label: 'Certificate Number',
          sivField: 'ds1350CertificateNumber'
        },
        {
          label: 'Issuing Authority',
          sivField: 'ds1350IssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 16,
      citizenshipStatusCodes: [4, 5],
      label: 'US Birth Certificate (original or certified copy)',
      inputs: [
        {
          label: 'Certificate Number',
          sivField: 'usBirthCertificateNumber'
        },
        {
          label: 'Issuing Authority (State that issued certificate)',
          sivField: 'birthCertificateIssuingAuthority'
        }
      ]
    },

    {
      documenTypeId: 17,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Native American Tribal Record',
      inputs: [
        {
          label: 'Document Number',
          sivField: 'listCTribalDocumentNumber'
        },
        {
          label: 'Issuing Authority (Issuing Tribe)',
          sivField: 'listCTribalDocumentIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 18,
      citizenshipStatusCodes: [4, 5],
      label: 'US Citizen ID Card (Form I-197)',
      inputs: [
        {
          label: 'Document Number',
          sivField: 'i197CitizenDocumentNumber'
        },
        {
          label: 'Issuing Authority',
          sivField: 'i197CitizenIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 19,
      citizenshipStatusCodes: [4, 5],
      label: 'ID Card for Use of Resident Citizen in the US (I-179)',
      inputs: [
        {
          label: 'Document Number',
          sivField: 'i179ResidentDocumentNumber'
        },
        {
          label: 'Issuing Authority',
          sivField: 'i179ResidentIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 20,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Employment authorization document issued by the DHS',
      inputs: [
        {
          label: 'Document Number',
          sivField: 'dhsEmploymentAuthDocumentNumber'
        }
      ]
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

      const listCDocumentTypeId = Number(vnode.attrs.listCDocumentTypeId);
      const listCOptions = generateDocumentSelectOptions(citizenshipStatusCode, listCDocumentTypeId, ListCDocumentData);

      return m('div', { class: 'measure' },
        [
          m('select', { name: 'listBDocumentTypeId' },
          [
            m('option', { selected: -1 === listBDocumentTypeId, disabled: true, value: -1 }, 'Please select a document'),
            ...listBOptions
          ]),
          m('select', { name: 'listCDocumentTypeId' },
          [
            m('option', { selected: -1 === listCDocumentTypeId, disabled: true, valeu: -1}, 'Please select a document'),
            ...listCOptions
          ])
        ]);
    }
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

  const docDataToVNodes = (documentTypeId = -1, vnode = {}, docDataSources = []) => {

    const documentData = docDataSources.find(
      (docData) => {
        return docData.documentTypeId == documentTypeId;
      });

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
        const {
          citizenshipStatusCode,
          documentTypeId,
          listBDocumentTypeId,
          listCDocumentTypeId } = vnode.attrs;

        if ([
          citizenshipStatusCode,
          documentTypeId,
          listBDocumentTypeId,
          listCDocumentTypeId].includes(-1)
        ) {
          return null;
        }

        return m(
          'div',
          { class: 'measure' },
          [
            m('div',
            [
              m('h2', 'List B Document Information', docDataToVNodes(listBDocumentTypeId, vnode, ListBDocumentData)),
            ]),
            m('div',
            [
              m('h2', 'List C Document Information', docDataToVNodes(listCDocumentTypeId, vnode, ListCDocumentData))
            ])
          ]);
      }
  };

  const AdditionalInformation = {
    view(vnode) {
      const documentTypeId      = Number(vnode.attrs.documentTypeId);
      const listBDocumentTypeId = Number(vnode.attrs.listBDocumentTypeId);
      const listCDocumentTypeId = Number(vnode.attrs.listCDocumentTypeId);

      if (
        (documentTypeId === ListBCDocumentTypeId &&
        (listBDocumentTypeId < 0 || listCDocumentTypeId < 0)) ||
        (documentTypeId < 0)
      ) {
        return null;
      }

      return (
        m('div', [
          m('h4', 'Additional Information (if any)'),
          m(
            'textarea',
            { name: 'additionalInformation', rows: 4, cols: 50 },
            vnode.attrs.additionalInformation || '')
        ]));
    }
  };

  const Certification = {
    view(vnode) {
      return (
        m('div', [
          m('h2', 'Certification:'),
          m('p', ' I attest, under penalty of perjury, that (1) I have examined the document(s) presented by the above-named employee, (2) the above-listed document(s) appear to be genuine and to relate to the employee named, and (3) to the best of my knowledge the employee is authorized to work in the United States.'),
          m('p', [
            m('strong', `The employee's first day of employment: `),
            m('span',
              m(
                'input',
                {
                  type: 'date',
                  value: vnode.attrs.hireDate || '',
                  name: 'hireDate'
                }))
          ])
        ]));
    }
  };

  const EmployerInfo = {
    view(vnode) {
      const i9Form = vnode.attrs;

      return m('div', { class: 'measure' }, [
        m('h2', 'Employer Info'),

        m('label', { for: 'todays-date' }, `Today's Date:`),
        m('input', {
          name: 'todaysDate',
          id: 'todays-date',
          value: i9Form.todaysDate,
          type: 'date'
        })
      ].concat(
        makeLabelInputPair({
          id: 'employerTitle',
          labelText: 'Title of Employer or Authorized Representative',
          initialValue: i9Form.employerTitle
        }),
        makeLabelInputPair({
          id: 'employerLastName',
          labelText: 'Employer Last Name',
          initialValue: i9Form.employerLastName
        }),
        makeLabelInputPair({
          id: 'employerFirstName',
          labelText: 'Employer First Name',
          initialValue: i9Form.employerFirstName
        }),
        makeLabelInputPair({
          id: 'employerName',
          labelText: `Employer's Business or Organization Name`,
          initialValue: i9Form.employerName
        }),
        makeLabelInputPair({
          id: 'employerAddress',
          labelText: `Employer's Business or Organization Address (Street Number and Name)`,
          initialValue: i9Form.employerAddress
        }),
        makeLabelInputPair({
          id: 'employerCity',
          labelText: 'City or Town',
          initialValue: i9Form.employerCity
        }),
        makeLabelInputPair({
          id: 'employerState',
          labelText: 'State',
          initialValue: i9Form.employerState
        }),
        makeLabelInputPair({
          id: 'employerZipCode',
          labelText: 'ZIP Code',
          initialValue: i9Form.employerZipCode
        })
      ))
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

  const onFormChange = (i9FormData) => (event) => {
    const key  = event.target.name;

    console.log(key);

    i9FormData[key] = event.target.value;

    // TODO: refactor this behavior using proxies or something
    if (key === 'citizenshipStatusCode') {
      i9FormData.documentTypeId        = -1;
      i9FormData.listBDocumentTypeId   = -1;
      i9FormData.listCDocumentTypeId   = -1;
      i9FormData.additionalInformation = '';
    }

    if (key === 'documentTypeId') {
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
      const i9Form         = vnode.attrs;
      const documentTypeId = Number(i9Form.documentTypeId);
      return (
        m('form', { onchange: onFormChange(i9Form) }, [
          m(Section1Info, i9Form),
          m(DocumentSelect, i9Form),

          documentTypeId === ListBCDocumentTypeId
          ? m(ListBAndCDocumentInfo, i9Form)
          : m(ListADocumentInfo, i9Form),

          m(AdditionalInformation, i9Form),
          m(Certification, i9Form),
          m(EmployerInfo, i9Form)
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