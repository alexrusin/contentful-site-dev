module.exports = function (migration) {
  const landingPage = migration
    .createContentType("landingPage")
    .name("Landing Page")
    .description("")
    .displayField("title");
  landingPage
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPage
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  landingPage
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPage
    .createField("sections")
    .name("Sections")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["welcomeSection", "servicesSection"],
          message: "Add page sections here",
        },
      ],

      linkType: "Entry",
    });

  landingPage.changeFieldControl("internalName", "builtin", "singleLine", {});
  landingPage.changeFieldControl("title", "builtin", "singleLine", {});

  landingPage.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "title",
  });

  landingPage.changeFieldControl("sections", "builtin", "entryLinksEditor", {});

  const servicesSection = migration
    .createContentType("servicesSection")
    .name("Services Section")
    .description("")
    .displayField("title");
  servicesSection
    .createField("internalName")
    .name("InternalName")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  servicesSection
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  servicesSection
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ["imageWrapper"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  servicesSection
    .createField("cards")
    .name("Cards")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          min: 2,
          max: 4,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["servicesCard"],
        },
      ],

      linkType: "Entry",
    });

  servicesSection
    .createField("callToAction")
    .name("Call To Action")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["callToActionButton"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  servicesSection.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  servicesSection.changeFieldControl("title", "builtin", "singleLine", {});
  servicesSection.changeFieldControl("image", "builtin", "entryLinkEditor", {});
  servicesSection.changeFieldControl(
    "cards",
    "builtin",
    "entryLinksEditor",
    {}
  );
  servicesSection.changeFieldControl(
    "callToAction",
    "builtin",
    "entryLinkEditor",
    {}
  );
  const servicesCard = migration
    .createContentType("servicesCard")
    .name("Services Card")
    .description("")
    .displayField("title");
  servicesCard
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  servicesCard
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  servicesCard
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ["imageWrapper"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  servicesCard.changeFieldControl("internalName", "builtin", "singleLine", {});
  servicesCard.changeFieldControl("title", "builtin", "singleLine", {});
  servicesCard.changeFieldControl("image", "builtin", "entryLinkEditor", {});
  const imageWrapper = migration
    .createContentType("imageWrapper")
    .name("Image Wrapper")
    .description("")
    .displayField("internalName");
  imageWrapper
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  imageWrapper
    .createField("altText")
    .name("Alt Text")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  imageWrapper
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  imageWrapper.changeFieldControl("internalName", "builtin", "singleLine", {});
  imageWrapper.changeFieldControl("altText", "builtin", "markdown", {});
  imageWrapper.changeFieldControl("image", "builtin", "assetLinkEditor", {});
  const welcomeSection = migration
    .createContentType("welcomeSection")
    .name("Welcome Section")
    .description("")
    .displayField("title");
  welcomeSection
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  welcomeSection
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  welcomeSection
    .createField("introduction")
    .name("Introduction")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  welcomeSection
    .createField("videoEmbedUrl")
    .name("Video Embed Url")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  welcomeSection
    .createField("callToAction")
    .name("Call To Action")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["callToActionButton"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  welcomeSection.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  welcomeSection.changeFieldControl("title", "builtin", "singleLine", {});
  welcomeSection.changeFieldControl("introduction", "builtin", "markdown", {});
  welcomeSection.changeFieldControl("videoEmbedUrl", "builtin", "markdown", {});

  welcomeSection.changeFieldControl(
    "callToAction",
    "builtin",
    "entryLinkEditor",
    {
      helpText: "Add call to action button",
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  const callToActionButton = migration
    .createContentType("callToActionButton")
    .name("Call To Action Button")
    .description("")
    .displayField("callToActionText");
  callToActionButton
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  callToActionButton
    .createField("callToActionText")
    .name("Call To Action Text")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  callToActionButton.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  callToActionButton.changeFieldControl(
    "callToActionText",
    "builtin",
    "singleLine",
    {}
  );
};
