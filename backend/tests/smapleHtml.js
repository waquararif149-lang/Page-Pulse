export const validHTML = `
<!DOCTYPE html>
<html>

<head>
    <title>Page Pulse</title>

    <meta
        name="description"
        content="A simple SEO audit tool">
</head>

<body>

    <h1>Welcome</h1>

    <h1>SEO Audit</h1>

    <img src="logo.png">

    <img
        src="banner.png"
        alt="Banner Image">

    <p>
        This is a simple website used for testing the parser.
    </p>

</body>

</html>
`;

export const noTitleHTML = `
<!DOCTYPE html>
<html>

<head>

    <meta
        name="description"
        content="Testing missing title">

</head>

<body>

    <h1>Hello World</h1>

    <img
        src="image.png"
        alt="Image">

    <p>
        Sample content.
    </p>

</body>

</html>
`;

export const noMetaHTML = `
<!DOCTYPE html>
<html>

<head>

    <title>Parser Test</title>

</head>

<body>

    <h1>Heading</h1>

    <img src="photo.png">

    <p>
        Testing parser without meta description.
    </p>

</body>

</html>
`;