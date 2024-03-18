export default function AboutIdRewievIdPage(
    { params }:
        {
            params:
            {
                aboutId: string,
                rewievId: string
            }
        }
) {
    return <h1>
        welcome about {params.aboutId} rewiev {params.rewievId} page
    </h1>
}