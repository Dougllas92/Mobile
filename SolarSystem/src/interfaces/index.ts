export interface PlanetDetailProps {
    id: number
    name: string
    type: string
    resume: string
    introduction: string
    image: string 
    searchTags: [string]
    features: {
      orbitalPeriod: [string]
      orbitalSpeed: string
      rotationDuration: string
      radius: string
      Diameter: string
      sunDistance: string
      satellites: {
        number: number
        names: [string]
      },
      temperature: string
    },
    hidrology: string
    geography: string
    bookmark: boolean
}