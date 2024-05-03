"use client"

import Link from "next/link"
import { Search } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input, inputVariants } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Give back to your community. <br className="hidden sm:inline" />
            Visit the sick. Attend the janaza. Feed the hungry
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Who amongst you is fasting today? Abu Bakr said: I am. He (again)
            said: Who amongst you followed a funeral procession today? Abu Bakr
            said: I did. He (the Prophet) again said: Who amongst you served
            food to the needy? Abu Bakr said: I did. He (again) said: Who
            amongst you has today visited the sick? Abu Bakr said: I did.
            Thereupon Allah&apos;s Messenger (ﷺ) said: Anyone in whom (these
            good deeds) are combined will certainly enter paradise.{" "}
            <br className="inline" /> - Sahih Muslim Book 44, Hadith 13
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Donate
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            About
          </Link>
        </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] justify-between gap-2">
          <ToggleGroup type="multiple">
            <ToggleGroupItem variant="outline" value="funeral">
              Janaza
            </ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="sick">
              Illness
            </ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="need">
              Donation
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="relative grow">
            <Search
              className={
                "absolute left-2.5 top-2.5 size-4 text-muted-foreground"
              }
            />
            <Input
              type="search"
              placeholder="Search..."
              className={inputVariants({ variant: "search" })}
            />
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Closest</SelectItem>
                <SelectItem value="dark">Most Recent</SelectItem>
                <SelectItem value="system">Most in Need</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>Janaza for John Doe</CardTitle>
            <CardDescription>Friday May 3, 12:00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Jon doe was a member of the community we all loved him etc...{" "}
            </p>
          </CardContent>
          <CardFooter>
            <p>Announced by - Sheikh John Doe; ICPC Clifton</p>
          </CardFooter>
        </Card>
      </section>
    </>
  )
}
